#!/usr/bin/node

const args = process.argv;
let num = args[2];
if (!isNaN(num)) {
  num = parseInt(num);
  for (let i = 0; i < num; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
