const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const addTaskRoute = require('./task/add'); // Import the add task route

const app = express();
const port = process.env.PORT || 4900;

// Middleware
app.use(bodyParser.json());

// Use the add task route
app.use('/tasks', addTaskRoute);

app.listen(port, (error) => {
    if (error) {
        console.log("Failed to connect due to error:", error);
    } else {
        console.log(`Server is running on port: http://localhost:${port}`);
    }
});
