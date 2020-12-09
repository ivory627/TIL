/**
 * render.js
 */

var express = require("express");
var ejs = require("ejs");

var app = express();

app.set("views",__dirname + "/views");
app.set("view engine","ejs");
app.engine("html",ejs.renderFile);

app.use(express.static("public"));

var controller3 = require("./router/controller3")(app);

var server = app.listen(2222,function(){
	console.log("서버가동!");
});