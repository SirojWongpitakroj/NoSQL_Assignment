import express from "express";
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
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
app.use(express.urlencoded({ extended: true }));

//main route
app.get('/', async (req, res) => {
    const recipesFromDB = await Recipe.find().sort({ createdAt: -1 });
    res.render('index', { recipes: recipesFromDB });
});




//recipe route
app.get('/recipe', (req, res) => {
    res.render("recipe");
});

app.post('/recipe/submit', async (req, res) => {
    const names = [].concat(req.body['ingredientName']);
    const amounts = [].concat(req.body['ingredientAmount']);
    const units = [].concat(req.body['ingredientUnit']);
    
    const ingredients = [];
    
    for (let i = 0; i < names.length; i++) {
        ingredients.push({
            name: names[i],
            amount: amounts[i],
            unit: units[i]
        });
    };

    const completeRecipe = {
        recipeTitle: req.body['recipeTitle'],
        chefName: req.body['chefName'],
        ingredients: ingredients,
        steps: [].concat(req.body['step']),
        equipments: [].concat(req.body['equipment'])
    };

    try {
        const newRecipe = new Recipe(completeRecipe);

        await newRecipe.save();

        res.redirect('/recipe');
    } catch (err) {
        console.error("Failed to save recipe", err.message);
        res.status(500).send("There was an error saving the recipe");
    };
    
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});