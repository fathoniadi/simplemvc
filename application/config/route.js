module.exports = function(route)
{

	route.setDefaultRoute("auth");
	// route.setRoute(nama file, nama route);
	route.setRoute("auth","auth");
	route.setRoute("auth","Auth");

}