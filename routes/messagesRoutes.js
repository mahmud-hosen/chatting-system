const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

// Define more specific routes first
router.get('/group_user/:program', messageController.getGroupUsers);
router.get('/:user_id/:program_id', messageController.getAllMessages);
router.post('/store', messageController.storeMessage);

module.exports = router;
