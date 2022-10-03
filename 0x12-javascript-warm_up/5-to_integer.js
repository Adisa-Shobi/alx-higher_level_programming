#!/usr/bin/node

const { argv } = require('node:process');

const entry = argv[2];
if (isNaN(entry)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parseInt(entry)}`);
}