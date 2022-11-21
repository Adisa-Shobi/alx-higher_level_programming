#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
