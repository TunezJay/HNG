const express = require('express');
const app = express();
const axios = require('axios');

// Root route to avoid "Cannot GET /" error
app.get('/', (req, res) => {
    res.send('Welcome to the API server!');
});
app.get('/api/hello', async (req, res) => {
    const visitorName = req.query.visitor_name || 'Guest';
    try {
        // Dummy location and temperature data
        const location = 'New York';
        const temperature = 11; // Placeholder temperature
        // Hardcoded IP address
        const clientIp = '127.0.0.1';
        res.json({
            client_ip: clientIp,
            location: location,
            greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`
        });
    } catch (error) {
        res.status(500).send('Error retrieving information');
    }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

