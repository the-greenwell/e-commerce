const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

// GET user
router.get('/:userId', user_controller.getUser);
// POST new user
router.post('/register', user_controller.createUser);
// PUT user (update)
router.put('/:userId/update', user_controller.updateUser);
// DELETE user
router.delete('/:userId/delete', user_controller.deleteUser);

module.exports = router;