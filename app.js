const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Set up static files directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/trips', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'trips.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Travlr Getaways server running on http://localhost:${port}`);
    console.log('Press Ctrl+C to stop the server');
});

module.exports = app;