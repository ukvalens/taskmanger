const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 4900;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, (error) => {
    if (error) {
        console.log("Failed to connect due to error:", error);
    } else {
        console.log(`Server is running on port: http://localhost:${port}`);
    }
});
