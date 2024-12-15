const express = require('express');
const dotenv = require('dotenv');
const connectdb = require('./config/config');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectdb()
    .then(() => console.log('Database connection successful'))
    .catch((error) => console.error('Database connection error:', error.message));

// Define routes
app.get('/', (req, res) => {
    res.send('API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



