
module.exports = function(app){
	app.get("/",function(req,res){
		res.send("ROOT");
	});
	app.get("/test1",function(req,res){
		res.send("TEST1");
	});
};