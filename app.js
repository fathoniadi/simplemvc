var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var fs = require('fs');
var environment = require('dotenv').load();
var app = express();
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var mysql      = require('mysql');
var conn = require(path.join(__dirname, environment.APP_PATH+'/config/database.js'));
var controller = require(path.join(__dirname, environment.SYS_PATH+'/controller/controller.js'));
var route = require(path.join(__dirname, environment.SYS_PATH+'/route/route.js'));


route.init(express,app,fs,environment,controller);
require(path.join(__dirname, environment.APP_PATH+'/config/route.js'))(route);
route.routing();


conn.init(mysql);
controller.init(conn.connection());


// view engine setup
app.set('views', path.join(__dirname, environment.APP_PATH+'/views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({resave: true, saveUninitialized: true, secret: '12456', cookie: { maxAge: 3600000 }}));
app.use(express.static(path.join(__dirname, 'public')));

/*app.use('/', routes);
app.use('/users', users);
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (environment.ENV == 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('errors/error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('errors/error', {
    message: err.message,
    error: {}
  });
});


app.listen(parseInt(environment.NODE_PORT));

module.exports = app;
