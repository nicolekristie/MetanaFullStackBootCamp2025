# Blog App

A full-stack blog application built with React (frontend), Express/Node.js (backend), and PostgreSQL (database).

---

## Features

- View a list of blogs
- Click a blog to view its details
- Admin dashboard (optional)
- Add, update, and delete blogs (if implemented)
- Responsive navigation bar

---

## Project Structure

```
module-8/assignment8/blog-app/
├── src/
│   ├── components/
│   │   ├── BlogList.jsx
│   │   ├── BlogListPage.jsx
│   │   ├── NavBar.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── BlogPage.jsx
│   │   ├── BlogDisplay.jsx
│   │   ├── Home.jsx
│   │   └── ...
│   ├── styles/
│   │   └── ...
│   ├── App.jsx
│   └── main.js
├── server/
│   ├── routes/
│   │   └── blogs/
│   │       └── blogs.js
│   ├── controllers/
│   │   └── blogsController.js
│   └── ...
├── package.json
└── README.md
```

---

## Getting Started

### 1. **Clone the repository**

```sh
git clone <repo-url>
cd module-8/assignment8/blog-app
```

### 2. **Install dependencies**

```sh
npm install
```

### 3. **Set up the database**

- Make sure PostgreSQL is running.
- Create a database named `Blogs`.
- Create a `blogs` table with columns:
  - `blog_id` (primary key, integer)
  - `title` (text)
  - `blog_content` (text)
  - `author` (text)
  - `created` (timestamp)

### 4. **Configure environment variables**

Create a `.env` file in the root with your database password:

```
DATABASE_PASSWORD=your_postgres_password
```

### 5. **Start the backend**

```sh
node src/main.js
```
or (if using nodemon)
```sh
nodemon src/main.js
```

### 6. **Start the frontend**

```sh
npm run dev
```

---

## Proxy Setup (Optional but Recommended)

To avoid CORS issues and use relative API paths, add this to your `package.json`:

```json
"proxy": "http://localhost:5050"
```

Then restart your frontend dev server.

---

## Usage

- Visit [http://localhost:5173](http://localhost:5173) in your browser.
- Click "BlogList" in the navbar to view all blogs.
- Click a blog title to view its details.

---

## Troubleshooting

- If blog details show "By | Invalid Date", ensure your `/blogs/:id` backend route returns a single blog object with `author` and `created` fields.
- If you see HTML instead of JSON in API responses, check your proxy setup and use the correct API URLs.
- Always restart your backend after making changes to server code.

---