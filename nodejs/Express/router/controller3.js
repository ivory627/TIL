
module.exports = function(app){
	app.get("/",function(req,res){
//		res.send("ROOT");
		/*
		var html = "<!DOCTYPE html>"
				 + "<html>"
				 + "<head>"
				 + "<meta charset='utf-8'/>"
				 + "</head>"
				 + "<body>"
				 + "<h1>ROOT</h1>"
				 + "</body>"
				 + "</html>";
		res.send(html);
		 */
		//위 소스를  html렌더링을 사용하는 방식으로 바꿈
		res.render("index.html");
	});
	
	app.get("/test",function(req,res){
		//res.send("TEST");
		res.render("test.html");
	});
};