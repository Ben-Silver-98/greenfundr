const express = require('express');
const stripe = require('../config/stripe');
const env = require('../config/env');

const router = express.Router();

const PRICE_IDS = new Set([env.priceMonthly, env.priceYearly].filter(Boolean));

function resolvePriceId(inputPlan, explicitPriceId) {
  if (explicitPriceId) {
    return explicitPriceId;
  }

  if (!inputPlan) {
    return null;
  }

  const normalised = String(inputPlan).toLowerCase();
  if (normalised === 'monthly') {
    return env.priceMonthly;
  }
  if (normalised === 'yearly' || normalised === 'annual' || normalised === 'annually') {
    return env.priceYearly;
  }

  return null;
}

router.post('/session', async (req, res) => {
  const { tenantId, priceId: bodyPriceId, plan, successUrl, cancelUrl } = req.body || {};

  if (!tenantId) {
    return res.status(400).json({ error: 'tenantId is required' });
  }

  const resolvedPriceId = resolvePriceId(plan, bodyPriceId);

  if (!resolvedPriceId) {
    return res.status(400).json({ error: 'Unable to resolve a valid Stripe price id' });
  }

  if (PRICE_IDS.size && !PRICE_IDS.has(resolvedPriceId)) {
    return res.status(400).json({ error: 'Provided price id is not recognised by the server' });
  }

  const successRedirect = successUrl || env.defaultSuccessUrl;
  const cancelRedirect = cancelUrl || env.defaultCancelUrl;

  if (!successRedirect || !cancelRedirect) {
    return res.status(400).json({
      error: 'successUrl and cancelUrl are required when defaults are not configured'
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      success_url: successRedirect,
      cancel_url: cancelRedirect,
      billing_address_collection: 'required',
      customer_creation: 'always',
      customer_update: {
        address: 'auto',
        name: 'auto'
      },
      customer_email: req.body?.customerEmail,
      automatic_tax: {
        enabled: true
      },
      tax_id_collection: {
        enabled: true
      },
      metadata: {
        tenantId
      },
      subscription_data: {
        metadata: {
          tenantId,
          requestedPlan: plan || 'custom'
        }
      },
      line_items: [
        {
          price: resolvedPriceId,
          quantity: 1
        }
      ],
      allow_promotion_codes: true
    });

    return res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Failed to create checkout session', error);
    return res.status(500).json({ error: 'Unable to create checkout session' });
  }
});

module.exports = router;
