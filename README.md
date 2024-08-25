# Blog App Backend

This project is a simple blog application backend built using Node.js, Express, and a database (SQL or NoSQL). The backend provides a RESTful API for managing blog posts, including creating, retrieving, updating, and deleting posts. The application also includes authentication using JWT (JSON Web Tokens) to secure the API endpoints.

## Features

### Backend (Node.js)
- **GET /posts**: List all blog posts.
- **GET /posts/:id**: Retrieve a specific blog post by ID.
- **POST /posts**: Create a new blog post.
- **PUT /posts/:id**: Update an existing blog post by ID.
- **DELETE /posts/:id**: Delete a blog post by ID.
- **Authentication**: Secure API endpoints using JWT.
- Basic error handling and input validation.

### Frontend (React)
- **Responsive Layout**: Includes a header, main content area, and footer.
- **List View**: Displays a list of blog posts with titles and content.
- **Detail View**: Displays detailed content for individual blog posts.
- **Add New Post Form**: Allows users to create new blog posts.
- **Client-Side Validation**: Basic validation for forms.

### Full Stack Integration
- **API Integration**: Connects the frontend to the backend API for managing blog posts.
- **Error Handling**: Implements proper error handling and loading states.

### Deployment
- **Cloud Deployment**: Deployed to a cloud platform Render for backend and vercel for frontend.

## Getting Started

### Prerequisites

- Node.js 
- npm 
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Itsayush30/Blog-App

