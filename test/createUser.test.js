// test/createUser.test.js

const { expect } = require('chai');
const { createUser } = require('../src/createUser');

describe('createUser', () => {
  it('should return a user object with the correct properties', () => {
    const user = createUser('Greg', 42);

    expect(user).to.have.property('name', 'Greg');
    expect(user).to.have.property('age').that.is.a('number');
    expect(user.roles).to.include('user');
  });
});
