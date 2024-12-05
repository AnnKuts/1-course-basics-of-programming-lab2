"use strict";

const createUser = (name, city) => {
  return {
    name: name,
    city: city
  };
};
console.log(createUser("Anna", "Kovel"));

module.exports = { createUser };
