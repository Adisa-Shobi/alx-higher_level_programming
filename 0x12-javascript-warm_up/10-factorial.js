#!/usr/bin/node

const { argv } = require('node:process');

function factorial (num) {
  if (isNaN(num) || num === 1) {
    return 1;
  }
  return (num * factorial(num - 1));
}

const result = factorial(parseInt(argv[2]));
console.log(result);
