#!/usr/bin/env node

/**
 * Script to provision Stripe products and prices required by the application.
 *
 * Usage:
 *   STRIPE_SECRET_KEY=sk_test_... node scripts/setupStripeProducts.js
 */

const dotenv = require('dotenv');
const stripeLib = require('stripe');

dotenv.config();

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

if (!STRIPE_SECRET_KEY) {
  console.error('Missing STRIPE_SECRET_KEY environment variable.');
  process.exit(1);
}

const PRODUCT_DEFINITIONS = [
  {
    name: 'Greenfundr Pro — Monthly',
    description: 'Premium access billed monthly',
    amount: 50000,
    interval: 'month'
  },
  {
    name: 'Greenfundr Pro — Annual',
    description: 'Premium access billed annually',
    amount: 500000,
    interval: 'year'
  }
];

async function ensureProductAndPrice(stripe, definition) {
  const existingProducts = await stripe.products.list({ active: true, limit: 100 });
  const product = existingProducts.data.find(
    (item) => item.name.toLowerCase() === definition.name.toLowerCase()
  );

  let productId = product ? product.id : null;

  if (!productId) {
    const createdProduct = await stripe.products.create({
      name: definition.name,
      description: definition.description,
      metadata: {
        app: 'greenfundr',
        interval: definition.interval
      }
    });
    productId = createdProduct.id;
    console.log(`Created product ${definition.name} -> ${productId}`);
  } else {
    console.log(`Found existing product ${definition.name} -> ${productId}`);
  }

  const prices = await stripe.prices.list({
    product: productId,
    active: true,
    limit: 100
  });

  const existingPrice = prices.data.find(
    (price) => price.unit_amount === definition.amount && price.currency === 'gbp'
  );

  if (existingPrice) {
    console.log(`Found price for ${definition.name}: ${existingPrice.id}`);
    return existingPrice.id;
  }

  const price = await stripe.prices.create({
    currency: 'gbp',
    unit_amount: definition.amount,
    recurring: {
      interval: definition.interval
    },
    product: productId,
    tax_behavior: 'exclusive',
    metadata: {
      app: 'greenfundr'
    }
  });

  console.log(`Created price for ${definition.name}: ${price.id}`);
  return price.id;
}

(async () => {
  try {
    const stripe = stripeLib(STRIPE_SECRET_KEY);

    const results = {};
    for (const definition of PRODUCT_DEFINITIONS) {
      results[definition.interval] = await ensureProductAndPrice(stripe, definition);
    }

    console.log('\nConfiguration complete. Update your environment file with:');
    console.log(`STRIPE_PRICE_MONTHLY=${results.month}`);
    console.log(`STRIPE_PRICE_YEARLY=${results.year}`);
  } catch (error) {
    console.error('Failed to setup Stripe pricing:', error.message);
    process.exitCode = 1;
  }
})();
