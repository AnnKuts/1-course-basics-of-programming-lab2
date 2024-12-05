'use strict';

const rangeOdd = (start, end) => {
  const length = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) { 
      length.push(i);
    }
  }
  return length;
};

module.exports = { rangeOdd };
