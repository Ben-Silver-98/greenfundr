const express = require('express');
const stripe = require('../config/stripe');
const env = require('../config/env');
const subscriptionStore = require('../services/subscriptionStore');

const router = express.Router();

function requireAdminKey(req, res, next) {
  const requiredKey = env.adminApiKey;
  if (!requiredKey) {
    return res.status(500).json({ error: 'ADMIN_API_KEY is not configured on the server' });
  }

  const providedKey = req.headers['x-admin-secret'] || req.headers['x-admin-key'];
  if (!providedKey || providedKey !== requiredKey) {
    return res.status(403).json({ error: 'Invalid admin credentials' });
  }

  return next();
}

router.post('/refund', requireAdminKey, async (req, res) => {
  const { paymentIntentId, chargeId, amount, reason } = req.body || {};

  if (!paymentIntentId && !chargeId) {
    return res.status(400).json({ error: 'paymentIntentId or chargeId is required' });
  }

  try {
    const payload = {
      reason: reason || 'requested_by_customer'
    };

    if (paymentIntentId) {
      payload.payment_intent = paymentIntentId;
    }

    if (chargeId) {
      payload.charge = chargeId;
    }

    if (amount) {
      payload.amount = amount;
    }

    const refund = await stripe.refunds.create(payload);
    return res.json({ refund });
  } catch (error) {
    console.error('Failed to create refund', error);
    return res.status(500).json({ error: 'Unable to create refund' });
  }
});

router.get('/tenants/:tenantId/subscription', requireAdminKey, async (req, res) => {
  try {
    const record = await subscriptionStore.getTenant(req.params.tenantId);
    if (!record) {
      return res.status(404).json({ error: 'Tenant not found' });
    }

    return res.json({ subscription: record });
  } catch (error) {
    console.error('Failed to fetch tenant subscription', error);
    return res.status(500).json({ error: 'Unable to fetch tenant subscription' });
  }
});

module.exports = router;
