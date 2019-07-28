const express = require('express');
const router = express.Router();

var userController = require("../api/userController");

router.post('/', userController.createUser);
router.get('/', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
