/**
 * dns.js
 */

var dns = require("dns");

//err : 오류 발생시 오류객체정보
//address : ip주소
//family : ip버전
dns.lookup("google.com",function(err,address,family){
	console.log("IP주소 :",address);
	console.log("IP버전 :",family);
});
//IP주소 : 172.217.24.46
//IP버전 : 4

var op1 = {
		family : 4
}

dns.lookup("google.com",op1,function(err,address,family){
	console.log("IP 주소 v4 :",address);
});
//IP 주소 v4 : 172.217.24.46

var op2 = {
		family : 6
};

dns.lookup("google.com",op2,function(err,address,family){
	console.log("IP 주소 v6 :",address);
});
//IP 주소 v6 : undefined
//받아오는데에 실패
