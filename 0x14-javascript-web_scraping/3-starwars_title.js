#!/usr/bin/node

const request = require('request');
const episodeId = process.argv[2];
request.get(
  'https://swapi-api.hbtn.io/api/films/' + episodeId,
  function (error, response, body) {
    if (error) {
      console.log(error);
    }
    console.log(JSON.parse(body).title);
  });
