#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  list.forEach((value, index) => {
    if (searchElement === value) {
      count++;
    }
  });
  return count;
};
