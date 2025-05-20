# Photo Gallery Server

This project is a Node.js application that provides an HTTP server for uploading and retrieving photos from a gallery. It includes user login and registration functionality, allowing users to share their photos with others. The application uses MongoDB as the database to store user and photo information.

## Features

- User registration and login
- Photo upload and retrieval
- Photo sharing functionality
- Secure authentication using JSON Web Tokens (JWT)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer (for file uploads)

## Project Structure

```
photo-gallery-server
├── src
│   ├── app.js
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── authController.js
│   │   ├── galleryController.js
│   │   └── shareController.js
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   ├── models
│   │   ├── photo.js
│   │   └── user.js
│   ├── routes
│   │   ├── auth.js
│   │   ├── gallery.js
│   │   └── share.js
│   └── utils
│       └── token.js
├── package.json
└── README.md
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd photo-gallery-server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your MongoDB database and update the connection string in `src/config/db.js`.

5. Start the server:
   ```
   npm start
   ```

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

### Gallery

- **POST /api/gallery/upload**: Upload a new photo.
- **GET /api/gallery/photos**: Retrieve all photos.

### Sharing

- **POST /api/share**: Share a photo with another user.
- **GET /api/share/shared-photos**: Retrieve shared photos.

## Usage Examples

### Register a User

```bash
curl -X POST http://localhost:3000/api/auth/register -d '{"username": "user1", "password": "pass123", "email": "user1@example.com"}' -H "Content-Type: application/json"
```

### Upload a Photo

```bash
curl -X POST http://localhost:3000/api/gallery/upload -F "photo=@/path/to/photo.jpg" -H "Authorization: Bearer <token>"
```

## License

This project is licensed under the MIT License.