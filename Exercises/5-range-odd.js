"use strict";

const rangeOdd = (start, end) => {
  const length = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) { 
      length.push(i);
    }
  }
  return length;
};
console.log(rangeOdd(15,30));
module.exports = { rangeOdd };
