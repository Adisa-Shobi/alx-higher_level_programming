#!/usr/bin/node
const SquareModel = require('./5-square');
module.exports = class Square extends SquareModel {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    c = c || 'X';
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
};
