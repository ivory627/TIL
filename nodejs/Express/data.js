/**
 * data.js 
 */

var express = require("express");
var app = express();
var ejs = require("ejs");
var cookieParser = require("cookie-parser");
var session = require("express-session");

app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.engine("ejs",ejs.renderFile);
app.use(cookieParser());
app.use(session({
	secret : "abcdefg",
	resave : false,
	saveUninitalized : true
}));

var router = require("./router/controller5")(app);

var server = app.listen(2222,function(){
	console.log("서버가 가동중입니다.");
});