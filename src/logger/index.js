const winston = require('winston')
const logLevel = process.env.logLevel

const logger = winston.createLogger({
    level: logLevel ? logLevel : 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console()
    ]
})

module.exports = logger;
