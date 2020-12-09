/**
 * main.js
 * arraylist module 로 외부모듈 사용 test
 */

var ArrayList = require("arraylist");

var list = new ArrayList;

list.add(100);
list.add(200);

var a1 = list.get(0);
var a2 = list.get(1);

console.log("a1 :", a1);
console.log("a2 :", a2);
