// test/createUser.test.js

import { expect } from 'chai';
import { createUser } from '../src/createUser.js';

describe('createUser', () => {
  it('should return a user object with the correct properties', () => {
    const user = createUser('Greg', 42);

    expect(user).to.have.property('name', 'Greg');
    expect(user).to.have.property('age').that.is.a('number');
    expect(user.roles).to.include('user');
  });
});
