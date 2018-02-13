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

module.exports = logger

