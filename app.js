var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var OAuth2Server = require ('oauth2-server');
var Request = OAuth2Server.Request;
var Response = OAuth2Server.Response;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.oauth = new OAuth2Server({
    model: require('./model.js'),
    accessTokenLifetime: 3600,
  allowBearerTokensInQueryString: true
  }
)

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post("/oauth2/token", function (req,res){
  var request = new Request(req);
  var response = new Response(res);
  return app.oauth.token(request,response)
    .then(token => {
      res.setHeader("Content-Type", "application/json;charset=UTF-8");
      res.setHeader("Cache-Control", "no-store");
      res.setHeader("Pragma", "no-cache");
      console.log (res.getHeaders());
      let body = {
        "access_token": token.accessToken,
        "token_type": "bearer",
        "expires_in": 3600
      };
      console.log (body);
      res.json(body);
    }).catch (err => {
      res.status(err.code || 500).json(err);
    })
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
