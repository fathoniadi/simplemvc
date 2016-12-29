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

module.exports.setRoute= function(routeFileName, routeName)
{
	routes.push({"file":routeFileName, "name":routeName});
}

module.exports.setDefaultRoute = function(routeFileName)
{
	var controllerPath = environment.APP_PATH+"/controller/";
	var router = express.Router();
	require("../../"+controllerPath+routeFileName+".js")(router,controller);
	app.use('/', router);
}

module.exports.routing = function()
{
 	var controllerPath = environment.APP_PATH+"/controller/";
	var router = express.Router();
	var n = routes.length;
	for(i=0;i<n;i++)
	{
		require("../../"+controllerPath+routes[i].file+".js")(router,controller);
		routeName = '/'+routes[i].name;
		app.use(routeName, router);
		
	}

}
