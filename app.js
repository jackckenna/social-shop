
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require("express-session");
var MongoStore = require('connect-mongo')(session);
var io = require('socket.io')(http);
var mongoose = require('mongoose');
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');

mongoose.connect("mongodb://localhost/social-shop");

app.set('view engine', 'ejs');


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg );
  });
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});


var routes = require('./routes/index');
var users = require('./routes/users');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(session({
//     secret: 'foo',
//     store: new MongoStore(options)
// }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(users);
// app.use(verifyToken);


// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   // err.status = 404;
//   next(err);
// });


//
// // error handlers
//
// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//
// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//   res.status(err.status || 500);
//   res.render('error', {
//     message: err.message,
//     error: {}
//   });
// });

// function verifyToken(req,res,next){
//     var token = req.session.token || req.headers["x-access-token"];
//
//     if (token){
//       jwt.verify(token, 'jack', function(err, decoded) {
//         // err
//         // decoded undefined
//         if (err){
//             return res.status(401).send({error:"Invalid token"});
//         } else {
//           next();
//         }
//       });
//
//     }
// }


module.exports = app;
