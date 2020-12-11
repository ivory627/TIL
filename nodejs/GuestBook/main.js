var express = require("express");
var app = express();
var ejs = require("ejs");
var session = require("express-session");

app.set("views",__dirname+"/views");
app.set("view name","ejs");
app.engine("ejs",ejs.renderFile);
app.use(session({
	secret : "abcdefg",
	resave : false,
	saveUninitialized : false
}));

var router = require("./router/controller")(app);

var server = app.listen(2000,function(){
	console.log("서버가 가동되었습니다.");
});