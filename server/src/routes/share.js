const express = require('express');
const router = express.Router();
const ShareController = require('../controllers/shareController');
const authMiddleware = require('../middleware/authMiddleware');

const shareController = new ShareController();

// Route to share a photo
router.post('/share', authMiddleware.authMiddleware, shareController.sharePhoto);

// Route to retrieve shared photos
router.get('/shared', authMiddleware.authMiddleware, shareController.getSharedPhotos);

module.exports = router;