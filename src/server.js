const express = require('express')
const app = express()
const logger = require('./logger')

app.listen(9000, () => {
    logger.info('Server is running at port 3000')
})

app.get('/', (req,res) => {

    logger.info('This is info log')
    logger.debug('This is debug log')
    logger.error('This is error log')

    return res.status(200).json({'status': 'OK'});
})
