/**
 * path.js
 */
var path = require('path');

//경로 무작위로 만듦

/////파일명만 출력
var basename1 = path.basename("c:\\abc\\abc.txt");
//window 경로 작성 방식
console.log("basename1 :", basename1);
//basename1 : abc.txt

var basename2 = path.basename("c:/abc/abc.txt");
//window,unix,linux,mac 경로 작성 방식
console.log("basename2 :", basename2);
//basename2 : abc.txt

var basename3 = path.basename("abc.txt");
console.log("basename3 :", basename3);
//basename3 : abc.txt

/////경로만 출력
var dirname1 = path.dirname("c:/abc/abc.txt");
console.log("dirname1 :", dirname1);
//dirname1 : c:/abc

var dirname2 = path.dirname("abc.txt");
console.log("dirname2 :", dirname2);
//dirname2 : .
//.은 현재 위치를 의미

/////확장자만 출력
var extname1 = path.extname("c:/abc/abc.txt");
console.log("extname1 :",extname1);
//extname1 : .txt

var extname2 = path.extname("abc.txt");
console.log("extname2 :",extname2);
//extname2 : .txt

var isAbsolute1 = path.isAbsolute("c:/abc/abc.txt");
var isAbsolute2 = path.isAbsolute("abc.txt");
var isAbsolute3 = path.isAbsolute("c:\\abc\\abc.txt");
console.log("isAbsolute1 :", isAbsolute1);
console.log("isAbsolute2 :", isAbsolute2);
console.log("isAbsolute3 :", isAbsolute3);
//window 기준
/*
isAbsolute1 : true
isAbsolute2 : false
isAbsolute3 : true
*/

var join = path.join("aaa","bbb","ccc.txt");
console.log("join :",join);
//join : aaa\bbb\ccc.txt

var normalize = path.normalize("c:/aaa/../bbb/ccc.txt");
//..은 현재 경로에서 하나 위로 올라감
console.log(normalize);
//c:\bbb\ccc.txt