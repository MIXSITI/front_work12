const hashStore = new Map();

function setPasswordHash(userId, passwordHash) {
  hashStore.set(userId, passwordHash);
}

function getPasswordHash(userId) {
  return hashStore.get(userId) || null;
}

function removePasswordHash(userId) {
  hashStore.delete(userId);
}

function clearPasswordHashes() {
  hashStore.clear();
}

module.exports = {
  setPasswordHash,
  getPasswordHash,
  removePasswordHash,
  clearPasswordHashes
};
