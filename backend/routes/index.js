const express = require('express')
const v1Routes = require('./vi')

const router = express.Router();


router.use('/v1',v1Routes)

module.exports = router