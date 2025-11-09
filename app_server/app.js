const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

// Configure Handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

// Register partials directory
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const travelerRouter = require('./app_server/controllers/traveler');

// Use traveler router
app.use('/', travelerRouter);

// Start server
app.listen(port, () => {
    console.log(`Travlr app running on port ${port}`);
});