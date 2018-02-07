"use strict";

console.log("main js is here");

let MathModule = require("./math");

console.log("math module", MathModule);
console.log("add", MathModule.adding(3, 6));