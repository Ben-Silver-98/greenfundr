const fs = require('fs/promises');
const path = require('path');

const STORE_PATH = path.join(__dirname, '../../data/subscriptions.json');

async function ensureStoreFile() {
  try {
    await fs.access(STORE_PATH);
  } catch (error) {
    const directory = path.dirname(STORE_PATH);
    await fs.mkdir(directory, { recursive: true });
    await fs.writeFile(STORE_PATH, '{}', 'utf8');
  }
}

async function readStore() {
  await ensureStoreFile();
  const raw = await fs.readFile(STORE_PATH, 'utf8');
  if (!raw.trim()) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    console.error('Unable to parse subscription store, resetting file.', error);
    await fs.writeFile(STORE_PATH, '{}', 'utf8');
    return {};
  }
}

async function writeStore(data) {
  await fs.writeFile(STORE_PATH, JSON.stringify(data, null, 2), 'utf8');
}

function normaliseTenantId(tenantId) {
  if (!tenantId) {
    throw new Error('tenantId is required');
  }

  return String(tenantId).trim();
}

async function upsertTenant(tenantId, payload) {
  const id = normaliseTenantId(tenantId);
  const store = await readStore();
  const now = new Date().toISOString();
  const existing = store[id] || {};

  const record = {
    ...existing,
    ...payload,
    tenantId: id,
    updatedAt: now,
    createdAt: existing.createdAt || now
  };

  store[id] = record;
  await writeStore(store);
  return record;
}

async function setTenantActive(tenantId, isActive, status) {
  return upsertTenant(tenantId, {
    isActive,
    status
  });
}

async function getTenant(tenantId) {
  const id = normaliseTenantId(tenantId);
  const store = await readStore();
  return store[id] || null;
}

async function findTenantBySubscriptionId(subscriptionId) {
  if (!subscriptionId) {
    return null;
  }

  const store = await readStore();
  return (
    Object.values(store).find((record) => record.subscriptionId === subscriptionId) || null
  );
}

async function removeTenant(tenantId) {
  const id = normaliseTenantId(tenantId);
  const store = await readStore();
  if (store[id]) {
    delete store[id];
    await writeStore(store);
  }
}

async function listTenants() {
  const store = await readStore();
  return Object.values(store);
}

module.exports = {
  upsertTenant,
  setTenantActive,
  getTenant,
  findTenantBySubscriptionId,
  removeTenant,
  listTenants
};
