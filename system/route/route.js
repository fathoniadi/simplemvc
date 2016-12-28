express = null;
app = null;
fs = null;
environment = null;
controller = null;
routes = [];


module.exports.init = function (_express,_app,_fs,_environment,_controller) {
	express = _express;
	app = _app;
	fs = _fs;
	environment = _environment;
	controller = _controller;
}

module.exports.setRoute= function(routeName)
{
	routes.push(routeName);
}

module.exports.routing = function()
{
	var controllerPath = environment.APP_PATH+"/controller/";
	var router = express.Router();
	var n = routes.length;
	for(i=0;i<n;i++)
	{
		require("../../"+controllerPath+routes[i]+".js")(router,controller);
		routesName = '/'+routes[i];
		console.log(routesName);
		app.use(routesName, router);
		
	}

}
