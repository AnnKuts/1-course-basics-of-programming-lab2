"use strict";
const fn = () => {
const obj1 = {name: "Anna"};
let obj2 = {name: "Anna"};
obj1.name = "Ivan";
obj2.name = "Ivan";
//obj1 = { name: "Oleh" };  
//obj1 doesn't work because it's constant and you can't change it
obj2 = { name: "Oleh" };
};
module.exports = { fn };
