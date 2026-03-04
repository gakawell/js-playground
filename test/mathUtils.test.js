const { expect } = require('chai');

const { add, multiple } = require('../src/mathUtils');

describe('mathUtils', () => {
    it('add() should add two number', () => {
        const expected = 5;
        const result = add(2,3);
        expect(result).to.equal(expected);
    });

    it('multipl() should multiply two numbers', () => {
        const expected = 20;
        const result = multiple(4, 5);
        expect(result).to.equal(expected);
    })
})