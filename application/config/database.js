var connect = null;

module.exports.init = function(database)
{
	  connect = database.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'empatmaret',
	  database : 'ajkuiz'
	});

}


module.exports.connection = function()
{
	return connect;
}