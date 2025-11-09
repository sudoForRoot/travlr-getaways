const express = require('express');
const router = express.Router();

// Mock data - in a real application, this would come from models
const tripData = [
    {
        id: 1,
        title: 'Paris Adventure',
        description: 'Explore the city of lights with our exclusive package',
        price: 1200,
        image: '/images/paris.jpg',
        duration: '5 days'
    },
    {
        id: 2,
        title: 'Tokyo Experience',
        description: 'Immerse yourself in Japanese culture and technology',
        price: 1800,
        image: '/images/tokyo.jpg',
        duration: '7 days'
    },
    {
        id: 3,
        title: 'Beach Paradise',
        description: 'Relax on pristine beaches with all-inclusive amenities',
        price: 900,
        image: '/images/beach.jpg',
        duration: '4 days'
    }
];

// Home page route
router.get('/', (req, res) => {
    res.render('pages/index', {
        title: 'Travlr - Your Travel Companion',
        featuredTrips: tripData.slice(0, 3),
        page: 'home'
    });
});

// Trips page route
router.get('/trips', (req, res) => {
    res.render('pages/trips', {
        title: 'Available Trips - Travlr',
        trips: tripData,
        page: 'trips'
    });
});

// About page route
router.get('/about', (req, res) => {
    res.render('pages/about', {
        title: 'About Travlr',
        page: 'about'
    });
});

// Contact page route
router.get('/contact', (req, res) => {
    res.render('pages/contact', {
        title: 'Contact Us - Travlr',
        page: 'contact'
    });
});

module.exports = router;