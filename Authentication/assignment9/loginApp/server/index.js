import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import router from "./routes/dashboard.js";
import profileRouter from "./routes/profile.js";
import adminDashRouter from "./routes/adminDashboard.js"
import usersRouter from "./routes/users.js";
import jwtAuthRouter from "./routes/jwtAuth.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import cors from "cors";
const corsOption = {
  origin: ["http://localhost:5173","http://localhost:5174","http://54.146.154.147","https://loginauth.shebuilds.it.com"], //only accept requests from FE server which is the port that Vite servers run on
  credentials: true
};

// Add error handling for uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err);
});

//middleware
app.use(express.json()); //req.body
// app.use(cors());

app.use(cors(corsOption));

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Body:', req.body);
  next();
});

// Debug middleware to log route matching
app.use((req, res, next) => {
  console.log('Matching route for:', req.method, req.path);
  next();
});

// Log the static files directory
console.log('Static files directory:', path.join(__dirname, '../client/dist'));

// Serve static files from the React app FIRST
app.use(express.static(path.join(__dirname, '../client/dist')));

// Serve static assets
app.use('/assets', express.static(path.join(__dirname, '../client/dist/assets')));
app.use('/vite.svg', express.static(path.join(__dirname, '../client/dist/vite.svg')));

// Root route - serve the React app
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '../client/dist/index.html');
  console.log('Serving index.html from:', indexPath);
  res.sendFile(indexPath);
});

// API Routes
app.get('/api', (req, res) => {
  try {
    console.log('API route accessed');
    res.json({ 
      message: "Welcome to Login Auth API",
      endpoints: {
        auth: "/auth",
        dashboard: "/dashboard",
        profile: "/profile",
        adminDashboard: "/adminDashboard",
        users: "/users"
      }
    });
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


//activate routes
app.use("/auth", jwtAuthRouter);
app.use("/dashboard", router);
app.use("/profile", profileRouter);
app.use("/adminDashboard", adminDashRouter);
app.use("/users", usersRouter);



app.listen(8015, () => {
  console.log("Server is running on port 8015");
 
});
