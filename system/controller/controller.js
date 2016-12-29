var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var mysql      = require('mysql');
var multer = require('multer');
var fs = require('fs');

module.exports.crypto = crypto;
module.exports.jwt = jwt;
module.exports.fs = fs;

var conn = null;
module.exports.init = function(_conn)
{
	conn = _conn;
}
module.exports.connection = function()
{
	return conn;
}

module.exports.loadModel = function(modelName)
{
	var model = require("../../application/model/"+modelName+".js");
	model.init(conn);
	return model;
}

module.exports.loadLibrary = function(libraryName)
{
	var lib = require("../../application/library/"+libraryName+".js");
	return lib;
}


module.exports.uploadHandler = function(data)
{
	var upload = multer(data[0]).fields(data[1]);
	return upload;
}