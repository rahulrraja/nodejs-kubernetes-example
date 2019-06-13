const winston = require('winston')

const logger = winston.createLogger({
    level: process.env.logConfiguration ? process.env.logConfiguration['level'] : 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console()
    ]
})

module.exports = logger;