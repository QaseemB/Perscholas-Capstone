// Import necessary modules and libraries
import express from 'express';
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
dotenv.config();  // Load environment variables from .env file
const app = express();
import cookieParser from 'cookie-parser';
import {router as userRouter} from './routes/usersRoutes.mjs';
import {router as instrumentRouter} from './routes/instrumentRoutes.mjs';
import {router as studioeqRouter} from './routes/studioeqRoutes.mjs';
import { router as cartRouter} from './routes/Cart.mjs';
import {router as authRouter} from './routes/authRoutes.mjs';
import { authMiddleware } from './utilties/authMiddleware.mjs';
import path from "path";
import { fileURLToPath } from 'url';
import { USERS } from "./models/users.mjs";

// Configure __filename and __dirname to work with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Debugging information - Helps track environment and configurations
console.log('Node Environment:', process.env.NODE_ENV);
console.log('Current Working Directory:', process.cwd());
console.log('MongoDB URI:', process.env.ATLAS_URI);
console.log('PORT:', process.env.PORT);

// Configure CORS to allow requests from the frontend (React app running on port 5173)
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Set custom headers to handle CORS and allow credentials
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// MongoDB connection URI from environment variables
const Uri = process.env.ATLAS_URI;

// Middleware for parsing cookies and JSON requests
app.use(cookieParser());
app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect(Uri);

// Event listeners for MongoDB connection
mongoose.connection.once('open', () => {
  console.log('connected to mongo');
});

mongoose.connection.on('error', (error) => {
  console.error('connection error:', error);
});

// Serve static files from the React frontend build folder
app.use(express.static(path.join(__dirname, '../../Frontend/dist')));
console.log('Static files served from:', 'styles');

// Set up the view engine to use Pug and set views directory
app.set("views", "Backend/src/views"); 
app.set("view engine", "pug");

// Route for handling CORS check (test route)
app.get('/api/cart', (req, res) => {
  res.json({ message: 'CORS-enabled for all origins!' });
});

// Route for rendering the signup page with dynamic content
app.get('/views', (req, res) => {
  const options = {
    title: 'Audio Engineer E-commerce',
    content: "Welcome to our premier audio engineering e-commerce platform, where cutting-edge technology meets exceptional sound quality. Discover a curated selection of the finest audio equipment, from state-of-the-art studio gear to top-tier instruments, all designed to elevate your sound. Whether you're a seasoned professional or an aspiring artist, our expertly crafted products and unparalleled customer support will help you create the perfect auditory experience <a href `studio.pug`> studio </a>",
  };
  res.render("signup", options);
});

// Routes to render specific views/pages
app.get('/userhome', (req, res) => {
  res.render('userhome');
});

app.get('/studio', (req, res) => {
  res.render('studio');
});

app.get("/instruments", (req, res) => {
  res.render("instruments");
});

// Middleware for logging request details (for debugging and monitoring)
const logTime = (req, res, next) => {
  const time = new Date();
  console.log(`-----${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`);
  next();
};

// Protected route with authentication middleware for users
app.use("/api/users", logTime, authMiddleware, userRouter, (req, res) => {
  res.json({ msg: 'This is a protected route' });
});

// Routes for instruments, studio equipment, cart, and authentication, all with logging middleware
app.use("/api/instrument", logTime, instrumentRouter);
app.use("/api/studio", logTime, studioeqRouter);
app.use("/api/cart", logTime, cartRouter);
app.use("/api/auth", logTime, authRouter);

// Catch-all route to serve the React frontend (single-page application routing)
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../Frontend/dist', 'index.html'));
});

// Start the server on the specified port, defaulting to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`running on porterpotty ${PORT}`);
});
