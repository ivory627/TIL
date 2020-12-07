/**
 * main.js
 * 기본사용법
 */

var second = require("./second.js");
//모듈 객체 생성

function f1(){
	console.log("f1 함수 호출");
}


console.log("Hello World");
//Hello World
var a1 = 100;
var a2 = "문자열1";

console.log("a1:%d, a2:%s",a1,a2);
//a1:100, a2:문자열1
console.log("a1:",a1);
//a1: 100
console.log("a1 :",a1,"a2 :",a2);
//a1 : 100 a2 : 문자열1

f1();
//f1 함수 호출
second.f2();
//f2 함수 호출