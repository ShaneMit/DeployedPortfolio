const router = require('express').Router()

router.use('/api', require('./itemRoutes.js'))

module.exports = router
