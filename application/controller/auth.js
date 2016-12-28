module.exports = function (router, controller)
{
	var authlib = require("../library/authlib.js");
	router.get("/", function(req, res, next) 
	{
		var data = controller.crypto.createHash("sha256").update("hehe").digest("hex");
		model = controller.loadModel("test");
		model1 = controller.loadModel("test2");
		model.testQuery(function(data)
		{
			res.send(data);
		})
		

	});

	router.get("/setjwt", function(req, res, next)
	{
		var token = controller.jwt.sign({ foo: 'bar' } ,'shhhhh',{ algorithm: 'HS512', expiresIn:'1 day' });
		authlib.verify(token, function(data)
		{
			res.send(data);
		});
	})
	
}