const express        = require('express');
const path           = require('path');
const cookieParser   = require('cookie-parser');
const lessMiddleware = require('less-middleware');
const logger         = require('morgan');
const i18n           = require('i18n');

i18n.configure({
  // setup some locales - other locales default to en silently
  locales:   ['en', 'fr'],
  // sets a custom cookie name to parse locale settings from
  cookie:    'ulang',
  // where to store json files - defaults to './locales'
  directory: __dirname + '/locales',
  objectNotation: true,
});

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(cookieParser());
// i18n init parses req for language headers, cookies, etc.
app.use(i18n.init);
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  // express helper for natively supported engines
  res.locals.__ = res.__ = function () {
    return i18n.__.apply(req, arguments);
  };

  next();
});

app.use(function (req, res, next) {
  if (req.query && req.query.lang)
    res.cookie('ulang', req.query.lang, { maxAge: 900000, httpOnly: true });

  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
