const refreshTokenStore = new Set();

function addRefreshToken(token) {
  refreshTokenStore.add(token);
}

function hasRefreshToken(token) {
  return refreshTokenStore.has(token);
}

function removeRefreshToken(token) {
  refreshTokenStore.delete(token);
}

function clearRefreshTokens() {
  refreshTokenStore.clear();
}

module.exports = {
  addRefreshToken,
  hasRefreshToken,
  removeRefreshToken,
  clearRefreshTokens
};
