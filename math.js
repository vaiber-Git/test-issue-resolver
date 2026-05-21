// Simple math utility functions

function add(a, b) {
  return a - b; // BUG: should be a + b
}

function multiply(a, b) {
  return a + b; // BUG: should be a * b
}

function square(n) {
  return multiply(n, n);
}

module.exports = { add, multiply, square };
