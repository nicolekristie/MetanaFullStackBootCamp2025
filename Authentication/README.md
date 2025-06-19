# Role-Based Authentication System

A full-stack authentication system built with React and Node.js, featuring role-based access control (RBAC) and JWT authentication.

## Features

- 🔐 Secure JWT-based authentication
- 👥 Role-based access control (Admin, Editor, User)
- 📱 Responsive dashboard interfaces
- 👤 User management for administrators
- 🚫 Protected routes and API endpoints
- 🎨 Modern UI with consistent styling

## Tech Stack

### Frontend
- React
- React Router v6
- Context API for state management
- Modern CSS-in-JS styling

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT for authentication
- bcrypt for password hashing

## Project Structure

```
assignment9/loginApp/
├── client/
│   └── jwtAuthLoginApp/
│       ├── src/
│       │   ├── Component/
│       │   │   ├── AdminDashboard.jsx
│       │   │   ├── Dashboard.jsx
│       │   │   ├── Home.jsx
│       │   │   ├── Login.jsx
│       │   │   ├── Profile.jsx
│       │   │   ├── Register.jsx
│       │   │   └── Users.jsx
│       │   ├── Context/
│       │   │   └── LoginContext.jsx
│       │   └── api/
│       │       └── fetchUsers.js
│       └── package.json
└── server/
    ├── database.sql
    ├── db.js
    ├── middleware/
    │   └── authorization.js
    ├── routes/
    │   └── jwtAuth.js
    └── server.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Authentication
```

2. Set up the database:
```bash
# Create a PostgreSQL database
psql
CREATE DATABASE authdatabase;

# Run the database schema
psql -d authdatabase -f server/database.sql
```

3. Install server dependencies:
```bash
cd assignment9/loginApp/server
npm install
```

4. Configure environment variables:
```bash
# Create a .env file in the server directory
touch .env

# Add the following variables
jwtSecret=your_jwt_secret_here
PG_USER=your_postgres_user
PG_PASSWORD=your_postgres_password
PG_HOST=localhost
PG_PORT=5432
PG_DATABASE=authdatabase
```

5. Install client dependencies:
```bash
cd ../client/jwtAuthLoginApp
npm install
```

### Running the Application

1. Start the server:
```bash
cd server
npm start
# Server runs on http://localhost:8015
```

2. Start the client:
```bash
cd client/jwtAuthLoginApp
npm start
# Client runs on http://localhost:5173
```

## User Roles and Access

- **Admin**: Full access to all features, including user management
- **Editor**: Access to content management features
- **User**: Basic access to personal dashboard and profile

## API Endpoints

### Authentication
- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user
- `GET /auth/verify` - Verify JWT token

### Users
- `GET /users` - Get all users (Admin only)
- `GET /users/:id` - Get specific user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user (Admin only)

## Security Features

- JWT token authentication
- Password hashing with bcrypt
- Protected API routes
- Role-based access control
- Secure HTTP-only cookies
- Input validation and sanitization

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- React Router for navigation
- JWT for secure authentication
- PostgreSQL for reliable data storage
- Express.js for robust API development 