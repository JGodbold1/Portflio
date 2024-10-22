const express = require('express');
const cors = require('cors'); // Ensure you have installed CORS
const bodyParser = require('body-parser'); // For parsing request bodies
const app = express();
const PORT = 5000; // Or any port you're using

app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    // Here you can handle the form submission (e.g., send an email or save to a database)
    console.log('Received contact form submission:', { name, email, message });
    res.status(200).send('Message received');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
