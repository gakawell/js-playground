// test/getNumbers.test.js

const { expect } = require('chai');
const { getNumbers } = require('../src/getNumbers');

describe('getNumbers', () => {
  it('should return an array containing specific values', () => {
    const result = getNumbers();

    expect(result).to.be.an('array');
    expect(result).to.include(2);
  });
});
