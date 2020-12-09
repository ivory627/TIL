
module.exports = function(app){
	app.get("/test2",function(req,res){
		res.send("TEST2");
	});

	app.get("/test3",function(req,res){
		res.send("TEST3");
	});
};