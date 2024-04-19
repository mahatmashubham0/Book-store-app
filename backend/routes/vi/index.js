const express = require('express')
const booksRoutes = require('./book_routes')
const usersRoutes = require('./user_routes')

const router = express.Router();

router.use('/books' , booksRoutes)

router.use('/users' , usersRoutes)


module.exports = router