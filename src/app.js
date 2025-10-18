const express = require('express');
const env = require('./config/env');

const checkoutRouter = require('./routes/checkout');
const customerPortalRouter = require('./routes/customerPortal');
const adminRouter = require('./routes/admin');
const webhooksRouter = require('./routes/webhooks');

const app = express();

app.use('/webhooks/stripe', webhooksRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/checkout', checkoutRouter);
app.use('/api/customer-portal', customerPortalRouter);
app.use('/api/admin', adminRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((error, req, res, next) => {
  console.error('Unhandled application error', error);
  res.status(500).json({ error: 'Internal server error' });
});

if (require.main === module) {
  const port = env.port;
  app.listen(port, () => {
    console.log(`Greenfundr Stripe service listening on port ${port}`);
  });
}

module.exports = app;
