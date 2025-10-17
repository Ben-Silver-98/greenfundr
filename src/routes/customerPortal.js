const express = require('express');
const stripe = require('../config/stripe');
const env = require('../config/env');
const subscriptionStore = require('../services/subscriptionStore');

const router = express.Router();

router.post('/session', async (req, res) => {
  const { tenantId, returnUrl } = req.body || {};

  if (!tenantId) {
    return res.status(400).json({ error: 'tenantId is required' });
  }

  try {
    const record = await subscriptionStore.getTenant(tenantId);

    if (!record || !record.customerId) {
      return res.status(404).json({ error: 'No customer is linked to this tenant' });
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: record.customerId,
      return_url: returnUrl || env.portalReturnUrl || env.defaultSuccessUrl
    });

    return res.json({ url: session.url });
  } catch (error) {
    console.error('Failed to create customer portal session', error);
    return res.status(500).json({ error: 'Unable to create customer portal session' });
  }
});

module.exports = router;
