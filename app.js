var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var MongoClient = require('mongodb').MongoClient;

var indexRouter = require('./routes/index');
var circlesRouter = require('./routes/circles');
var squaresRouter = require('./routes/squares');
var trianglesRouter = require('./routes/triangles');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
console.log("holaa")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/circles', circlesRouter);
app.use('/squares', squaresRouter);
app.use('/triangles', trianglesRouter);

const mongobdClient = new MongoClient('mongodb://admin:admin@localhost:27017/gateway?authSource=admin&authMechanism=SCRAM-SHA-256', { useUnifiedTopology: true });
mongobdClient.connect(function(err, mongobdClient) {
  if (err) throw err;
  app.locals.db = mongobdClient.db();
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
