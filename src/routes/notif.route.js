const express = require('express');
const NotifController = require('../controller/notif.controller');
const router = express.Router();


router.get('/', NotifController.getAllNotfi);
router.post('/', NotifController.createNewNotfi);
router.patch('/:id', NotifController.updateNotfi);
router.delete('/:id', NotifController.deleteNotfi);

module.exports = router;