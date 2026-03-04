// test/divide.test.js

const { expect } = require('chai');
const { divide } = require('../src/divide');

describe('divide', () => {
  it('should throw an error when dividing by zero', () => {
    const badCall = () => divide(10, 0);

    expect(badCall).to.throw('Cannot divide by zero');
  });

  it('should divide two numbers when denominator is not zero', () => {
    const result = divide(10, 2);

    expect(result).to.equal(5);
  });
});
