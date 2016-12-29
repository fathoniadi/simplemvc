module.exports = function (router,controller)
{
	var authlib = controller.loadLibrary("authlib");
	router.get("/", function(req, res, next) 
	{
		var data = controller.crypto.createHash("sha256").update("hehe").digest("hex");
		/*model = controller.loadModel("test");
		model1 = controller.loadModel("test2");
		model.testQuery(function(data)
		{
			res.send(data);
		})
		*/
		res.render('index',{title: 'setcookie page'});

	});

	router.get("/setjwt", function(req, res, next)
	{
		var token = controller.jwt.sign({ foo: 'bar' } ,'shhhhh',{ algorithm: 'HS512', expiresIn:'1 day' });
		authlib.verify(token, function(data)
		{
			res.send(data);
		});
	})
	

	router.post("/uploads", function(req, res, next)
	{
		var upload = controller.uploadHandler([{dest:'./public/uploads/'},[{name: 'file', maxCount: 1}]]
           );
		var fs = controller.fs;
		upload(req,res,function(err) 
		{
	        console.log(req.body);
	        console.log(req.files.file[0]);
	        var nFile = req.files.file.length;
	        console.log(nFile);
	        
	        if(err) 
	        {
	            return res.end("Error uploading file.");
	        }
	        else
	        {
	        	for(i=0;i<nFile;i++)
		        {
		         	
		        	fs.rename("./public/uploads/"+req.files.file[i].filename, "./public/uploads/"+req.files.file[i].originalname, function(err) {
				            if ( err ) console.log('ERROR: ' + err);
				           res.end("File is uploaded");
				    });


		        }
	        }
	        
    	});
	});
}