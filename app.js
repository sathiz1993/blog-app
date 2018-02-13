var express = require('express')
var path = require('path')
var logger = require('./config')
var winston_req_logger = require('winston-request-logger')

// Express app instance
var app = express()

// Create custom request logger format
app.use(winston_req_logger.create(logger, {
    'status': ':statusCode',
    'method': ':method',
    'url': ':url[pathname]',
    'responseTime': ':responseTime ms',
    'clientIp': ':ip',
    'browser': ':userAgent',
},false))


// Configure middle ware for static
app.use(express.static(path.join(__dirname, 'static')))

// Run the express app instance in 3000
app.listen(3000, function(){
    logger.info("Application is running at http://127.0.0.1:3000");
});

// Expose the express app instance
module.exports = app;

// Import the routes
require('./routes/index')
