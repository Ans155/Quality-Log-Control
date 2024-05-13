const express = require('express');
let dotenv = require('dotenv').config()
const loggerMiddleware = require('./src/middleware/logger');
const errorHandler = require('./src/utils/errorHandler');
const api1Router = require('./src/controllers/api1');
const connectDB = require("./src/config/db");

const app = express();

connectDB();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(express.json());
app.use(loggerMiddleware);

// Routes
app.use('/api1', api1Router);
// Add other API routers as needed

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
