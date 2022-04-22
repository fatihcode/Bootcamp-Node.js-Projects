const express = require('express')
const router = express.Router()

const userController = require('../controllers/user.controller')


router.get('/', userController.findAll)

router.get('/:id', userController.findOne)

router.post('/', userController.createUser)

router.put('/:id', userController.findByIdAndUpdate)

router.delete('/:id', userController.findByIdAndRemove)

module.exports = router