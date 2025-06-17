# Assignment M6: Node.js + Express + PostgreSQL Blog API

This project is a simple blog API built with Node.js, Express, and PostgreSQL using the `pg` library.  
It demonstrates RESTful API design, PostgreSQL integration, and basic user and blog management.

---

## Features

- RESTful API for blogs (`/blogs`) and users (`/users`)
- PostgreSQL database connection using `pg`
- Modular route and controller structure
- JSON request/response handling
- EJS view engine setup (for future expansion)
- Environment variable support for sensitive data

---

## Project Structure

```
module-6/
  assignment M6/
    controllers/
      blogsController.js
      usersController.js
    routes/
      blogs/
        blogs.js
      users/
        users.js
    main.js
    config.js
    package.json
    ...
```

---

## Getting Started

### 1. Clone the repository

```sh
git clone <your-repo-url>
cd module-6/assignment\ M6
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure Environment

Create a `config.js` file or use environment variables for your database password:

```js
// config.js
export const DATABASE_PASSWORD = 'your_postgres_password';
```

### 4. Set up the Database

- Make sure PostgreSQL is running.
- Create a database named `Blogs`.
- Run your schema SQL if needed.


```sh
psql -U postgres -d Blogs -f schema.sql


### 5. Start the Server

```sh
node main.js
```

The server will run on [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

### Blogs

- `GET /blogs` — Get all blogs
- `POST /blogs` — Create a new blog
- `GET /blogs/:id` — Get a blog by ID
- `PATCH /blogs/:id` — Update a blog by ID
- `DELETE /blogs/:id` — Delete a blog by ID

### Users

- `GET /users` — Get all users
- `POST /users` — Create a new user
- ... (add more as implemented)

---

## Database Schema

See the [dbdiagram.io schema](https://dbdiagram.io/d/company_records-67eb34e04f7afba184df12dd) for a visual representation.

---

## License

MIT

---

## Author

Nicole (Metana Full Stack Bootcamp 2025)