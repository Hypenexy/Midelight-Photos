const express = require('express');
const router = express.Router();
const GalleryController = require('../controllers/galleryController');
const { authMiddleware } = require('../middleware/authMiddleware');
const uploadMiddleware = require('../middleware/uploadMiddleware');

const galleryController = new GalleryController();

// Route for uploading a photo
router.post('/upload', authMiddleware, uploadMiddleware, galleryController.uploadPhoto);

// Route for retrieving all photos
router.get('/', authMiddleware, galleryController.getPhotos);

// Route for deleting a photo
router.delete('/:id', authMiddleware, galleryController.deletePhoto);

module.exports = router;