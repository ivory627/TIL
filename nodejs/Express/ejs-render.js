/**
 * ejs-render.js
 */

var express = require("express");
var app = express();
var ejs = require("ejs");

app.set("views",__dirname+"/views");
app.set("view engine","ejs");
app.engine("ejs",ejs.renderFile);

var router = require("./router/controller4")(app);

var server = app.listen(2222,function(){
	console.log("서버가동!!");
});