#!/usr/bin/node
module.exports = class Rectangle {
  constructor (w, h) {
    if (!isNaN(w) && !isNaN(h) && w > 0 && h > 0) {
      [this.height, this.width] = [h, w];
    }
  }
};
