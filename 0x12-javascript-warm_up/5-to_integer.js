#!/usr/bin/node

const args = process.argv;
const entry = args[2];
if (isNaN(entry)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parseInt(entry)}`);
}
