#!/usr/bin/node
exports.converter = function (base) {
  return function (num) {
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const result = [];
    while (num) {
      result.unshift(chars[num % base]);
      num = num / base >> 0;
    }
    return result.join('');
  };
};
