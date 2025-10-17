const express = require('express');
const stripe = require('../config/stripe');
const env = require('../config/env');
const subscriptionStore = require('../services/subscriptionStore');
const tenantProvisioning = require('../services/tenantProvisioning');

const router = express.Router();

const ACTIVE_STATUSES = new Set(['active', 'trialing', 'past_due']);

async function fetchSubscriptionDetails(subscriptionId) {
  if (!subscriptionId) {
    return null;
  }

  try {
    return await stripe.subscriptions.retrieve(subscriptionId, {
      expand: ['items.data.price']
    });
  } catch (error) {
    console.error(`Unable to fetch subscription ${subscriptionId}`, error);
    return null;
  }
}

async function handleCheckoutSessionCompleted(session) {
  const tenantId = session.metadata?.tenantId || session.client_reference_id;

  if (!tenantId) {
    console.warn('checkout.session.completed missing tenant identifier', session.id);
    return;
  }

  const subscriptionId = session.subscription;
  const subscription = await fetchSubscriptionDetails(subscriptionId);

  const priceId = subscription?.items?.data?.[0]?.price?.id;
  const status = subscription?.status || session.status;
  const currentPeriodEnd = subscription?.current_period_end
    ? new Date(subscription.current_period_end * 1000).toISOString()
    : null;

  const attributes = {
    subscriptionId,
    customerId: session.customer,
    priceId,
    status,
    currentPeriodEnd,
    checkoutSessionId: session.id
  };

  if (ACTIVE_STATUSES.has(status)) {
    await tenantProvisioning.enableTenantAccess(tenantId, attributes);
  } else {
    await tenantProvisioning.disableTenantAccess(tenantId, {
      ...attributes,
      inactiveReason: status || 'pending'
    });
  }
}

async function handleSubscriptionUpdated(subscription) {
  let tenantId = subscription.metadata?.tenantId;

  if (!tenantId) {
    const existingRecord = await subscriptionStore.findTenantBySubscriptionId(subscription.id);
    if (existingRecord) {
      tenantId = existingRecord.tenantId;
    }
  }

  if (!tenantId) {
    console.warn(`Subscription ${subscription.id} update ignored because tenant mapping is missing.`);
    return;
  }

  const status = subscription.status;
  const attributes = {
    subscriptionId: subscription.id,
    customerId: subscription.customer,
    priceId: subscription.items?.data?.[0]?.price?.id,
    status,
    currentPeriodEnd: subscription.current_period_end
      ? new Date(subscription.current_period_end * 1000).toISOString()
      : null
  };

  if (ACTIVE_STATUSES.has(status)) {
    await tenantProvisioning.enableTenantAccess(tenantId, attributes);
  } else {
    await tenantProvisioning.disableTenantAccess(tenantId, {
      ...attributes,
      inactiveReason: status
    });
  }
}

router.post(
  '/',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    const signature = req.headers['stripe-signature'];

    let event;

    try {
      if (!env.stripeWebhookSecret) {
        throw new Error('Stripe webhook secret is not configured');
      }

      event = stripe.webhooks.constructEvent(req.body, signature, env.stripeWebhookSecret);
    } catch (error) {
      console.error('Error verifying Stripe webhook', error.message);
      const statusCode = error.message === 'Stripe webhook secret is not configured' ? 500 : 400;
      return res.status(statusCode).send(`Webhook Error: ${error.message}`);
    }

    try {
      switch (event.type) {
        case 'checkout.session.completed':
          await handleCheckoutSessionCompleted(event.data.object);
          break;
        case 'customer.subscription.updated':
        case 'customer.subscription.deleted':
          await handleSubscriptionUpdated(event.data.object);
          break;
        default:
          console.log(`Unhandled Stripe webhook event type ${event.type}`);
      }

      return res.json({ received: true });
    } catch (error) {
      console.error('Failed to process Stripe webhook event', error);
      return res.status(500).json({ error: 'Failed to process webhook event' });
    }
  }
);

module.exports = router;
