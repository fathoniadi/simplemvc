var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var mysql      = require('mysql');

module.exports.crypto = crypto;
module.exports.jwt = jwt;

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