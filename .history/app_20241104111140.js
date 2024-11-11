const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a route to handle GET requests
app.get('/', (req, res) => {
    const users = [