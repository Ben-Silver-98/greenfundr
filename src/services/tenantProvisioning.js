const subscriptionStore = require('./subscriptionStore');

async function enableTenantAccess(tenantId, attributes = {}) {
  const record = await subscriptionStore.upsertTenant(tenantId, {
    ...attributes,
    isActive: true,
    activatedAt: new Date().toISOString()
  });

  console.log(`Provisioned tenant ${tenantId} with subscription ${record.subscriptionId}`);
  return record;
}

async function disableTenantAccess(tenantId, attributes = {}) {
  const record = await subscriptionStore.upsertTenant(tenantId, {
    ...attributes,
    isActive: false,
    deactivatedAt: new Date().toISOString()
  });

  console.log(`Revoked access for tenant ${tenantId}`);
  return record;
}

module.exports = {
  enableTenantAccess,
  disableTenantAccess
};
