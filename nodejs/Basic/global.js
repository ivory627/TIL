/**
 * global.js
 */

console.log("__dirname :", __dirname);
console.log("__filename :", __filename);
//__dirname : C:\Users\psa06\eclipse-workspace\nodejs-study\Basic
//__filename : C:\Users\psa06\eclipse-workspace\nodejs-study\Basic\global.js

//////////Immediate
console.log("node.js코드 입니다");
setImmediate(function(){
	console.log("Immediate 동작 1");
});

console.log("node.js코드 입니다");
var a1 = setImmediate(function(){
	console.log("Immediate 동작 2");
});

console.log("node.js코드 입니다");

clearImmediate(a1);

console.log("작업이 모두 완료되었습니다");
//모든 작업이 완료된 후 Immediate가 실행됨
/*
node.js코드 입니다
node.js코드 입니다
node.js코드 입니다
작업이 모두 완료되었습니다
Immediate 동작 1
*/



//////////Interval
var a1 = 0;
var a2 = setInterval(function(){
	console.log("interval동작");
	a1++;
	console.log("a1 :",a1);
	if(a1>=5){
		clearInterval(a2);
	}
},1000);
console.log("작업이 모두 완료되었습니다");

/*
작업이 모두 완료되었습니다
interval동작
a1 : 1
interval동작
a1 : 2
interval동작
a1 : 3
interval동작
a1 : 4
interval동작
a1 : 5
*/

//////////Timeout
var a1 = setTimeout(function(){
	console.log("timeout 동작");
},1000);
clearTimeout(a1);
//1초후 출력해야하는데 clear가 되어 동작안함