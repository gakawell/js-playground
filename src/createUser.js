// src/createUser.js

function createUser(name, age) {
  return {
    name,
    age,
    roles: ['user']
  };
}

module.exports = { createUser };
