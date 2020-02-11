const localStorageMock = (function() {
  let store = {};

  return {
    getItem: jest.fn(function(key) {
      return store[key] !== undefined ? store[key] : null;
    }),
    setItem: jest.fn(function(key, value) {
      store[key] = value.toString();
    }),
    removeItem: jest.fn(function(key) {
      delete store[key];
    }),
    clear: jest.fn(function() {
      store = {};
    })
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock
});
