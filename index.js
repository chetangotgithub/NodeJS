//Chapter 1 Common JS vs ECMAScript Modules
//CommonJS need export (module.exports { fx1, fx2, fx3, ...}) and ECMAScript Modules use import (export before each fxn)
import { add, subtract } from "./script.js";

console.log(add(5, 5));
console.log(subtract(10, 5));

//chapter 2 : Global
/*
this in NodeJS global scope is the current module.exports object, not the global object. 
This is different from a browser where the global scope is the global window object. 
Consider the following code executed in Node:
*/
console.log(this); // logs {}
module.exports.foo = 5;
console.log(this); // log { foo:5 }

//chapter 3: Node Package Manager
/*
npm i <package-name>@<version>
npm run <script-name>
--save-dev
--save-optional
--save
--no-save 
*/
