/**
 * buffer.js
 */
var buf1 = Buffer.alloc(10);
console.log(buf1);
//1바이트씩 16진수 형태
//<Buffer 00 00 00 00 00 00 00 00 00 00>

var buf2 = Buffer.allocUnsafe(10);
console.log(buf2);
//컴퓨터 메모리 상태에 따라 값이 다르게 출력됨
//<Buffer 01 12 93 c8 f8 01 00 00 00 00>

var size1 = Buffer.byteLength(buf1);
console.log("size1 :",size1);
//size1 : 10
console.log("bytes :",buf1.length);
//bytes : 10

var buf3 = Buffer.from('abcd');
var buf4 = Buffer.from('안녕하세요');
console.log(buf3);
//<Buffer 61 62 63 64>
console.log(buf4);
//한글은 1글자당 3바이트씩 (Window기준)
//<Buffer ec 95 88 eb 85 95 ed 95 98 ec 84 b8 ec 9a 94>

var buf5 = Buffer.from('cccc');
var buf6 = Buffer.from('cccc');
var buf7 = Buffer.from('aaaa');
var buf8 = Buffer.from('dddd');

var v1 = Buffer.compare(buf5, buf6);
console.log("v1 :",v1);
//buf5==buf6
//v1 : 0

var v2 = Buffer.compare(buf5, buf7);
console.log("v2 :",v2);
//buf5>buf7
//v2 : 1

var v3 = Buffer.compare(buf5, buf8);
console.log("v3 :",v3);
//buf5<buf8
//v3 : -1

var array1 = [buf5, buf6, buf7, buf8];

var buf9 = Buffer.concat(array1);
console.log(buf9);
//<Buffer 63 63 63 63 63 63 63 63 61 61 61 61 64 64 64 64>

var buf10 = Buffer.from('123456789');
var buf11 = Buffer.alloc(10);
buf10.copy(buf11,0,2,5);
//buf11에 인덱스 0부터 채워넣기 buf10의 인덱스 2부터 5전까지
console.log(buf11.toString());
//345

var array2 = buf5.entries();
for(var str of array2){
	console.log(str);
}
/*
[ 0, 99 ]
[ 1, 99 ]
[ 2, 99 ]
[ 3, 99 ]
 */

var buf12 = Buffer.from('abcd');
var buf13 = Buffer.from('abcd');
var buf14 = Buffer.from('zzzz');

var v4 = buf12.equals(buf13);
console.log("v4 :",v4);
//v4 : true

var v5 = buf12.equals(buf14);
console.log("v5 :",v5);
//v5 : false

var buf15 = Buffer.from('aaaaa');
console.log(buf15);
//<Buffer 61 61 61 61 61>
buf15.fill('c');
console.log(buf15);
//<Buffer 63 63 63 63 63>
buf15.fill('abc');
console.log(buf15);
//abcab
//<Buffer 61 62 63 61 62>

var buf16 = Buffer.from("Hello Node.js");
var v6 = buf16.includes("Node");
console.log("v6 :", v6);
//v6 : true

var v7 = buf16.includes("JavaScript");
console.log("v7 :", v7);
//v7 : false

var v8 = buf16.indexOf("Node");
console.log("v8 :", v8);
//v8 : 6

var v9 = buf16.indexOf("JavaScript");
console.log("v9 :", v9);
//v9 : -1

var v10 = buf16.lastIndexOf("Node");
console.log("v10 :", v10);
//v10 : 6

var v11 = Buffer.isBuffer(buf16);
console.log("v11 :", v11);
//v11 : true

var obj1 = {
		a1 : 10
};
var v12 = Buffer.isBuffer(obj1);
console.log("v12 :", v12);
//v12 : false

var array3 = buf16.keys();
for(var i of array3){
	console.log(i);
}
/*
0
1
2
3
4
5
6
7
8
9
10
11
12
*/

var v13 = buf16.toString();
console.log("v13 :",v13);
//v13 : Hello Node.js
