const multer = require('multer');

// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the destination folder for uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Use timestamp to avoid filename collisions
    }
});

// File filter to only allow certain file types
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/; // Allowed file types
    const isValid = allowedTypes.test(file.mimetype) && allowedTypes.test(file.originalname.split('.').pop().toLowerCase());
    if (isValid) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, PNG, and GIF files are allowed.'), false);
    }
};

// Initialize multer with storage and file filter
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5 // Limit file size to 5MB
    },
    fileFilter: fileFilter
});

// Export the upload middleware
module.exports = upload.single('photo'); // 'photo' is the name of the file input field in the form