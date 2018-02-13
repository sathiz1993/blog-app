var app = require('../app')
var logger = require('../config')

// Index of the app
app.get('/', function(req, res, nxt){
    logger.info("Inside the index");
    res.send("success");
});

// Login route
app.get('/login', function(req, res, nxt){
    logger.info("Login page");
    res.send("login");
});

// Signup
app.get('/signup', function(req, res, nxt){
    logger.info("Signup Page");
    res.send("signup");
});

module.exports = app
