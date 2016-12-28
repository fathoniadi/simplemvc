var connect = null;

module.exports.init = function(database)
{
	  connect = database.createConnection({
	  host     : '',
	  user     : '',
	  password : '',
	  database : ''
	});

}


module.exports.connection = function()
{
	return connect;
}