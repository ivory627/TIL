/**
 * fs.js
 */

var fs = require('fs');

//파일 생성시 해당 프로젝트에 생성됨
//비동기식 : 작업이 끝날때까지 기다리지않고 명령하므로 순서에 관계없이 실행됨

fs.writeFile("data1.txt","Hello node.js",function(err){
	console.log("비동기식 저장1");
});

fs.writeFile("data2.txt","Hello node.js",function(err){
	console.log("비동기식 저장2");
});



fs.appendFile("data1.txt","안녕하세요",function(err){
	console.log("비동기식 추가1");
});

fs.appendFile("data2.txt","반갑습니다",function(err){
	console.log("비동기식 추가2");
});

//data가 버퍼에 담겨 출력되므로 toString을 사용
fs.readFile("data1.txt",function(err,data){
	console.log("data1 :",data.toString());
});

fs.readFile("data2.txt",function(err,data){
	console.log("data2 :",data.toString());
});



//동기식 : 작업이 끝날때까지 기다리므로 순서대로 실행됨
//콜백함수가 필요없음
fs.writeFileSync("data3.txt","Hello node.js");
console.log("동기식 저장1");

fs.writeFileSync("data4.txt","Hello node.js");
console.log("동기식 저장2");

fs.appendFileSync("data3.txt","안녕!");
console.log("파일내용 추가1");

fs.appendFileSync("data4.txt","반가워!");
console.log("파일내용 추가2");


var data3 = fs.readFileSync("data3.txt");
console.log("data3 :", data3.toString());

var data4 = fs.readFileSync("data4.txt");
console.log("data4 :", data4.toString());