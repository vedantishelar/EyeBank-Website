// backend/server.js

const express = require('express');
const connectDB = require('./config/dbConfig');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/donors', require('./routes/donorRoutes'));

// Serve static assets in production (if deploying frontend and backend together)
// const path = require('path');
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/build')));
//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
//     });
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
