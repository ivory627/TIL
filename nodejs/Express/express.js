/**
 * express.js
 */

var express = require("express");
var app = express();

app.get("/",function(req,res){
	res.send("ROOT");
});

app.get("/test",function(req,res){
	res.send("TEST");
});
var server = app.listen(2000,function(){
	console.log("서버가동");
});