var jwt = require('jsonwebtoken');
module.exports.verify = function(token, data){
	//console.log(token);
	if (token) {
		jwt.verify(token, 'shhhhh', function(err, decoded) {
			if (err) {
				data(false);
			} else {
				data(decoded);
			}
		})
	} else {
		//tidak ada token
		data(false);
	}
}