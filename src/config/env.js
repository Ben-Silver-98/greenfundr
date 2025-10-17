const dotenv = require('dotenv');

dotenv.config();

const requiredEnv = ['STRIPE_SECRET_KEY', 'STRIPE_PRICE_MONTHLY', 'STRIPE_PRICE_YEARLY'];

const missing = requiredEnv.filter((key) => !process.env[key]);

if (missing.length) {
  // We only warn during startup; actual runtime errors will surface when the values are used.
  console.warn(`Warning: Missing environment variables: ${missing.join(', ')}`);
}

module.exports = {
  port: parseInt(process.env.PORT || '3000', 10),
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  priceMonthly: process.env.STRIPE_PRICE_MONTHLY,
  priceYearly: process.env.STRIPE_PRICE_YEARLY,
  defaultSuccessUrl: process.env.DEFAULT_SUCCESS_URL,
  defaultCancelUrl: process.env.DEFAULT_CANCEL_URL,
  portalReturnUrl: process.env.CUSTOMER_PORTAL_RETURN_URL,
  adminApiKey: process.env.ADMIN_API_KEY
};
