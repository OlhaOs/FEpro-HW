"use strict";

function Calculator(value) {
  this.result = value;
  this.add = function (val) {
    return (this.result += val);
  };
  this.sub = function (val) {
    return (this.result -= val);
  };

  this.div = function (val) {
    return (this.result /= val);
  };
  this.mult = function (val) {
    return (this.result *= val);
  };
}

const calc = new Calculator(10);
