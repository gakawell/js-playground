// src/createUser.js

export function createUser(name, age) {
  return {
    name,
    age,
    roles: ['user']
  };
}

//module.exports = { createUser };
