// test/getNumbers.test.js

import { expect } from 'chai';
import { getNumbers } from '../src/getNumbers.js';

describe('getNumbers', () => {
  it('should return an array containing specific values', () => {
    const result = getNumbers();

    expect(result).to.be.an('array');
    expect(result).to.include(2);
  });
});
