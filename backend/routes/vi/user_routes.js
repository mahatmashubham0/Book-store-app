const express = require('express')
const {userController} = require('../../controllers')
const {checkUserExit} = require('../../middleware')

const router = express.Router();

router.post('/' , checkUserExit.checkUserExit,
   userController.createUser)

router.post('/signup' , checkUserExit.checkUserExit,
   userController.RegisterUser)
router.get('/login' , userController.loginUser)

router.get('/' , userController.getAllUser)

// router.get('/:id' , userController.getUser)

// router.delete('/:id' , userController.destoryUser)

// router.patch('/:id' , userController.updateUser)

module.exports = router


