var conn = null;
module.exports.init = function(_conn)
{
	conn = _conn;
}


module.exports.testQuery = function(fn)
{

	var data = conn.query('SELECT * from user', function(err, rows) {
		 fn(rows);
	});

}
