var conn = null;
module.exports.init = function(_conn)
{
	conn = _conn;
	// Jangan duubah
}


/*****************************************************************************************************/
module.exports.testQuery = function(fn)
{

	var data = conn.query('SELECT * from user', function(err, rows) {
		console.log(rows);
		 fn(rows);
	});

}
