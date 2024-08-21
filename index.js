import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToMongo from './db.js'; // Use .js extension for ES modules
import Commonrouter from './router/common.js';
import Userrouter from './router/userrouter.js';
import bodyParser from 'body-parser';

// Initialize environment variables
dotenv.config({ path: './config.env' });

const app = express();

// Middleware
app.use(express.json({ limit: '20mb' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use('/common', Commonrouter);
app.use('/user', Userrouter);

// Connect to MongoDB
connectToMongo();

const port = process.env.PORT;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
