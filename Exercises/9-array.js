"use strict";

const phonebook = [
{name: "Anna", phone: "+380333333333"},
{name: "Ivanka", phone: "+380111111111"},
{name: "Artem", phone: "+380999999999"}
];
const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};
console.log(findPhoneByName("Anna"));
module.exports = { phonebook, findPhoneByName };
