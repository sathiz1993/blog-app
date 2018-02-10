var express = require('express')
var path = require('path')
var morgan = require('morgan')
var winston = require('winston')
var winston_req_logger = require('winston-request-logger')

// Logger timestamp format
const tsFormat = () => (new Date()).toISOString();

// Winston logger instance
var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: '/tmp/node_app.log',
            handleExceptions: true,
            json: true,
            maxsize: 10485760, //10MB
            maxFiles: 5,
            timestamp: tsFormat,
        }),
        new winston.transports.Console({
            level: 'info',
            handleExceptions: true,
            json: true,
            timestamp: tsFormat
        }),
    ],
    exitOnError: false
})

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
app.use(express.static(path.join(__dirname, 'public/templates')))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.render('index')
})

app.listen(3000, function(){
    logger.info("Application is running at http://127.0.0.1:3000")
});