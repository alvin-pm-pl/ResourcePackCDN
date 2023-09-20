const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs  = require('fs');

const indexRouter = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // render the error page
    res.status(err.status || 500);
    res.end("Error");
});

global.packDir = path.join(__dirname, 'packs');

if (!fs.existsSync(global.packDir)) {
    fs.mkdirSync(global.packDir);
}

module.exports = app;
