#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const results = {};

request.get(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const todoList = JSON.parse(body);
    for (const item in todoList) {
      if (todoList[item].completed) {
        const task = todoList[item];
        if (task.userId in results) {
          results[task.userId]++;
        } else {
          results[task.userId] = 1;
        }
      }
    }
    console.log(results);
  } else {
    console.log('code:', response.statusCode);
  }
});
