var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/ride');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ride', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


const mongoose = require('mongoose')


var mongodb= require('mongodb');
var MongoClient= mongodb.MongoClient;

/*  please add DB URL here */

//var url='' /*  please add DB URL here */

var url=''

 mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true
}).then(() => {
 console.log('connected to db')
}).catch((error) => {
 console.log(error)
}) 


require('./models/driver');
require('./models/ride');

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
