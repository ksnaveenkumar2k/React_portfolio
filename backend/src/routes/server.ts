// src/routes/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import emailRoutes from './emailRoutes'; // Import the email routes

const app = express();
const PORT = process.env.PORT || 5000; // Port from environment or default to 5000

// Middleware for handling CORS and parsing JSON requests
app.use(cors());
app.use(bodyParser.json());

// Use the emailRoutes for the '/api' prefix
app.use('/api', emailRoutes);

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
