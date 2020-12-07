/**
 * crypto.js
 */
var crypto = require("crypto");

var ciphers = crypto.getCiphers();

for(var x of ciphers){
	console.log(x);
}
//암호화 알고리즘 이름들을 반환

var key = "test key";
var data = "암호화 할 데이터";

//crypto.createCipher(암호화방식,암호화Key);
var cipher = crypto.createCipher("aes-256-cbc",key);

//update(평문(암호화이전),input type, output type);
//input,output type 생략가능
var result = cipher.update(data,"utf8","base64");

//마지막 종료블럭 추가 final(output type);
//output type 생략가능
result += cipher.final("base64");

console.log("암호화문자열 :",result);
//암호화문자열 : 5QWmtXac25Ysg6UJfa0OjmRWQoQRK7Sgxanx2VY/ZHs=

//복호화도 같은 방식으로 진행
var decipher = crypto.createDecipher("aes-256-cbc", key);
var result2 = decipher.update(result,"base64","utf8");
result2 += decipher.final("utf8");

console.log("복호화문자열 :",result2);
//복호화문자열 : 암호화 할 데이터
