"use strict";

let adding = require("./add");
let multiply = require("./multiply");
let subtract = require("./subtract");

let Calculator = {
    adding,
    subtract,
    multiply
};

module.exports = Calculator;