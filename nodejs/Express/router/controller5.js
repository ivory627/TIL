var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({extended : false});

module.exports = function(app){
	
	app.get("/",function(req,res){
		res.render("data-test.ejs");
	});
	
	app.get("/parameter",function(req,res){
		
		var render_data = {
				data1 : req.query.data1,
				data2 : req.query.data2
		};
		
		res.render("parameter.ejs",render_data);
		
	});
	
	app.post("/parameter",urlencodedParser,function(req,res){
		var render_data = {
				data1 : req.body.data1,
				data2 : req.body.data2
		};
		res.render("parameter.ejs",render_data);
	});
	
	app.get("/save-cookie",function(req,res){
		var op = {
				maxAge : 365 * 24 * 60 * 60
		};
		//쿠키저장
		res.cookie("cookie1","aaaaa",op);
		res.render("save-cookie.ejs");
	});
	
	app.get("/load-cookie",function(req,res){
		var render_data = {
				cookie1 : req.cookies.cookie1
		};
		res.render("load-cookie.ejs",render_data);
	});
	
	app.get("/save-session",function(req,res){
		
		req.session.data1 = 100;
		req.session.data2 = "안녕~";
		
		res.render("save-session.ejs");
	});
	
	app.get("/load-session",function(req,res){
		var render_data = {
				data1 : req.session.data1,
				data2 : req.session.data2
		};
		res.render("load-session.ejs",render_data);
	});
	
	
};