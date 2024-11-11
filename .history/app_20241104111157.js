const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Define a route to handle GET requests
app.get('/', (req, res) => {
    const users = [
        {
            id: 1,
            name: 'John Doe',
            email: 'n9w7A@example.com', 
        },
        {   id  : 2,            
            name: 'Jane Doe',
            email: 'YJqFP@example.com',
    }