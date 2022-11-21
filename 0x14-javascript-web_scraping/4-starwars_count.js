#!/usr/bin/node

const request = require('request');
const endpoint = process.argv[2];
let count = 0;
request.get(
  endpoint,
  function (error, response, body) {
    if (error) {
      console.log(error);
    } else if (response.statusCode === 200) {
      const data = JSON.parse(body).results;
      for (const index in data) {
        for (const subIndex in data[index].characters) {
          if (data[index].characters[subIndex].includes('18')) {
            count++;
          }
        }
      }
      console.log(count);
    } else {
      console.log('code:', response.statusCode);
    }
  });
