var logger = require('../logger')

logger.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL.toLowerCase() : 'info';

logger.info('This is info log')
logger.debug('This is debug log')

