const express = require('express')
const {bookController} = require('../../controllers')

const router = express.Router();

router.post('/' , bookController.createBook)

router.get('/' , bookController.getAllBook)

router.get('/:id' , bookController.getBook)

router.delete('/:id' , bookController.destoryBook)

router.patch('/:id' , bookController.updateBook)

module.exports = router