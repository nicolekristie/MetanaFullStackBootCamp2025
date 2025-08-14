# JWT Auth Login App – Full Stack Deployment

This project is a full-stack authentication app deployed on AWS EC2, featuring a React frontend, Node.js/Express backend, PostgreSQL database, and Caddy as a reverse proxy.

## Live Demo

[https://loginauth.shebuilds.it.com/login](https://loginauth.shebuilds.it.com/login)

---

## Project Structure

```
assignment-11/
├── client/                # React frontend (Vite)
│   └── jwtAuthLoginApp/
├── server/                # Node.js/Express backend
├── users_table.sql        # PostgreSQL schema and seed data
├── .gitignore
└── README.md              # (this file)
```

---

## Getting Started (Development)

### 1. Clone the repository

```sh
git clone https://github.com/nicolekristie/jwt-auth-login-app.git
cd assignment-11
```

### 2. Setup the Backend

```sh
cd server
npm install
npm start
```

### 3. Setup the Frontend

```sh
cd client/jwtAuthLoginApp
npm install
npm run dev
```

### 4. Database

- Install PostgreSQL and run `users_table.sql` to set up tables and seed data.

---

## Deployment Overview

- **EC2 Instance:** Ubuntu, Node.js, Git, PostgreSQL installed
- **Reverse Proxy:** Caddy configured for HTTPS and static file serving
- **Process Manager:** PM2 for backend reliability
- **Domain & SSL:** Custom domain with automatic SSL via Caddy

---

## Useful Scripts

- `npm run dev` – Start frontend in development mode
- `npm run build` – Build frontend for production
- `npm start` – Start backend server

---

## License

MIT