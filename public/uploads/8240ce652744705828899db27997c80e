module.exports.testQuery = function(fn)
{

	var data = app.connection.query('SELECT * from user', function(err, rows) {
		 fn(rows);
	});

}
module.exports.inputUser = function(res)
{
	for(i=5114100002;i<5114100100;i++)
	{
		var query = "Insert into user (nrp,password) values ('"+i+"','"+i+"')";
		connection.query(query, function(err, rows) {
			
		});
	}
}