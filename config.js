var winston = require('winston')
var winston_req_logger = require('winston-request-logger')
var mongoose = require('mongoose')

// Logger timestamp format
const tsFormat = () => (new Date()).toISOString();

// Connect to mongodb
mongoose.connect('mongodb://sathish:kumar@localhost:27017/blogDB?authSource=admin');

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

// Create a connection
var db = mongoose.connection;

// Notify if error in connection
db.on('error', console.error.bind(console, 'error in database connection'));

module.exports = logger

