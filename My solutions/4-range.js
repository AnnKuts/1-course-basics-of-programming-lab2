"use strict";
const range = (start, end) => {
    const length = [];
    for (let i = start; i <= end; i++) {
      length.push(i);
    }
    return length;
  };
  console.log(range(15,30));
module.exports = { range };
