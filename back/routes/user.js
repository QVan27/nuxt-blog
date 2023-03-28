const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller')

router.get('/getUser', userController.getAll);
router.get('/get/single/user/:id', userController.getOne);

router.put('/update/single/user/:id', userController.updateById)
router.delete('/delete/single/user/:id', userController.updateById)

module.exports = router;