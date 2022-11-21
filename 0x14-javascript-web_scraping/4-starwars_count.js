#!/usr/bin/node

const request = require('request');
const endpoint = process.argv[2];
const query = 'https://swapi-api.hbtn.io/api/people/18/';
let count = 0;
request.get(
  endpoint,
  function (error, response, body) {
    if (error) {
      console.log(error);
    }
    const data = JSON.parse(body);
    for (let i = 0; i < data.results.length; i++) {
      if (data.results[i].characters.includes(query)) {
        count++;
      }
    }
    console.log(count);
  });
