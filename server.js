import express from "express";
import dotenv from 'dotenv';
import { connectDB } from './config/mongodb.js';
import Recipe from './models/Recipe.js';

const app = express();
dotenv.config();

// Connect to Database
connectDB();

const PORT = process.env.PORT;

// middleware
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());

//main route
app.get('/recipe', (req, res) => {
    res.render("index");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});