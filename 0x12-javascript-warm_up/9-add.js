#!/usr/bin/node

const { argv } = require('node:process');

const a = argv[2];
const b = argv[3];

function add (a, b) {
  const sum = parseInt(a) + parseInt(b);
  console.log(sum);
}
add(a, b);
