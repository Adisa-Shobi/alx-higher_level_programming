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
    } else if (response.statusCode === 200) {
      const data = JSON.parse(body).results;
      for (const index in data) {
        if (data[index].characters.includes(query)) {
          count++;
        }
      }
      console.log(count);
    } else {
      console.log('code:', response.statusCode);
    }
  });
