# Midelight Photos

A self-hosted image server and client for managing, viewing, and sharing your photos securely.

## Features

- 📁 Upload, organize, and manage images
- 🔒 User authentication and access control
- 🌐 Web-based client for browsing and searching
- 🖼️ Fast image previews and full-resolution downloads
- 🚀 REST API for automation and integration
- 🏠 100% self-hosted, no third-party cloud required

## Getting Started

### Prerequisites

- Docker

## If not using Docker

- Node.js & npm
- A supported database (e.g., PostgreSQL, SQLite)

### Quick Start (Docker)

```bash
git clone https://github.com/yourusername/midelight-photos.git
cd midelight-photos
docker-compose up -d
```

Visit `http://localhost:3000` in your browser.

### Manual Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure `.env` file
4. Start the server: `npm start`

## Usage

- Access the web client at `http://localhost:3000`
- Use the REST API for programmatic access

<!-- ## Configuration

Edit the `.env` file to set database, storage, and authentication options. -->

<!-- ## Screenshots

![Gallery View](docs/screenshots/gallery.png)
![Image Details](docs/screenshots/details.png) -->

<!-- ## License

MIT License

---

**Contributions welcome!** See [CONTRIBUTING.md](CONTRIBUTING.md) for details. -->