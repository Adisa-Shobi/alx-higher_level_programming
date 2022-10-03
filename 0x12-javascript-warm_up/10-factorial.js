#!/usr/bin/node

const args = process.argv;
function factorial (num) {
  if (isNaN(num) || num === 1) {
    return 1;
  }
  return (num * factorial(num - 1));
}

const result = factorial(parseInt(args[2]));
console.log(result);
