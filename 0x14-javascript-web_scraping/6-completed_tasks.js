#!/usr/bin/node

const request = require('request');
const url = 'https://jsonplaceholder.typicode.com/todos';
const results = {};

request.get(url, function (err, response, body) {
  if (err) {
    console.log(err);
  }
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
});
