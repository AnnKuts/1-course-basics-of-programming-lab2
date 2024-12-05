'use strict';
const phonebook = {
  Anna: "+380333333333",
  Ivanka: "+380111111111",
  Artem : "+380999999999",
};
const findPhoneByName = (name) => {
  return phonebook[name] || "Phone isn't found";  
};
console.log(findPhoneByName("Anna")); 
console.log(findPhoneByName("John")); 
module.exports = { phonebook, findPhoneByName };
