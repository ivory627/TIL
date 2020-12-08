/**
 * http.js
 */
var http = require('http');
var url = require('url');

//req = 요청, res = 응답
var server = http.createServer(function(req,res){

//	res.write("Hello World");
	
	var q = url.parse(req.url,true);
	
	//head정보
	res.writeHead(200,{"content-type":"text/html"});
//	res.writeHead(200,{"content-type":"audio/mp3"});
	
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<head>");
	res.write("<meta charset='utf-8'/>");
	res.write("</head>");
	res.write("<body>");
	
	switch(q.pathname){
	case "/" :
		res.write("<h1>root 입니다</h1>");
		res.write("<a href='test1?data1=111'>test1</a></br>");
		res.write("<a href='test2?data1=222'>test2</a></br>");
		break;
	case "/test1" :
		res.write("<h1>test1 입니다</h1>");
		res.write("<h1>data1:"+q.query.data1+"</h1>");
		break;
	case "/test2" :
		res.write("<h1>test2 입니다</h1>");	
		res.write("<h1>data1:"+q.query.data1+"</h1>");
		break;
	}
	
	res.write("</body>");
	res.write("</html>");
	
	res.end();
	
});

//port번호 넣어주기
server.listen(1234);
console.log("서버 가동");

//실행 후 주소창에 localhost:1234

