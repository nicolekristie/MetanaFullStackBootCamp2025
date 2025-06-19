# Assignment M5: Node.js + Express + MongoDB Blog API

This project is a simple Blog API built with Node.js, Express, and MongoDB (using Mongoose).  
It demonstrates RESTful API design, MongoDB integration, and basic user and blog management.

---

## Features

- RESTful API for blogs (`/blogs`) and users (`/users`)
- MongoDB database connection using Mongoose
- Modular route and controller structure
- JSON request/response handling
- Environment variable support for sensitive data

---

## Project Structure

```
module-5/
  assignmentM5/
    models/
      blog.js
      user.js
    routes/
      blogs.js
      users.js
      route.rest
    controllers/
      blogsController.js
      usersController.js
    server.js
    .env
    package.json
```

---

## Getting Started

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd module-5/assignmentM5
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure Environment

Create a `.env` file in the root of the project:

```properties
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>.mongodb.net/Blogs?retryWrites=true&w=majority"
```

Replace `<username>`, `<password>`, and `<cluster-url>` with your MongoDB Atlas credentials.

### 4. Start the Server

```sh
node server.js
```

The server will run on [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

### Blogs

- `GET /blogs` — Get all blogs
- `GET /blogs/:id` — Get a blog by ID
- `POST /blogs` — Create a new blog
- `PATCH /blogs/:id` — Update a blog by ID
- `DELETE /blogs/:id` — Delete a blog by ID

### Users

- `GET /users` — Get all users
- `GET /users/:id` — Get a user by ID
- `POST /users` — Create a new user
- `PATCH /users/:id` — Update a user by ID
- `DELETE /users/:id` — Delete a user by ID

---

## Testing the API

You can use the provided `route.rest` file with the [REST Client VS Code extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)  
or use Postman/curl to test the endpoints.

---

## License

MIT

---

## Author

Nicole (Metana Full Stack Bootcamp 2025)