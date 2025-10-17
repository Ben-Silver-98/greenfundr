const Stripe = require('stripe');
const env = require('./env');

if (!env.stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY is required to initialise Stripe client');
}

const stripe = new Stripe(env.stripeSecretKey, {
  apiVersion: '2024-06-20'
});

module.exports = stripe;
