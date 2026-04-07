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

//utility function
const formatRecipeData = (body) => {
    const names = [].concat(body['ingredientName']);
    const amounts = [].concat(body['ingredientAmount']);
    const units = [].concat(body['ingredientUnit']);
    
    const ingredients = [];
    
    for (let i = 0; i < names.length; i++) {
        ingredients.push({
            name: names[i],
            amount: amounts[i],
            unit: units[i]
        });
    };

    const completeRecipe = {
        recipeTitle: body['recipeTitle'],
        chefName: body['chefName'],
        ingredients: ingredients,
        steps: [].concat(body['step']),
        equipments: [].concat(body['equipment'])
    };
    return completeRecipe;
};

//recipe route
app.get('/recipe/create', (req, res) => {
    res.render("recipe", { 
        method: "create",
        recipe: { recipeTitle: '', chefName: '', ingredients: [], steps: [], equipments: [] }
    });
});

app.get('/recipe/update/:id', async (req, res) => {
    const recipesFromDB = await Recipe.findById(req.params.id);
    res.render("recipe", { recipe: recipesFromDB, method: "update", id: req.params.id });
});

app.get('/recipe/delete/:id', async (req, res) => {
    try {
        const recipeId = req.params.id;
        await Recipe.findByIdAndDelete(recipeId);
        console.log("Successfully deleted the recipe");
    } catch (err) {
        res.status(500).send("Error deleting recipe");
    }
    res.redirect("/");

});

app.post('/recipe/update/submit', async (req, res) => {
    try {
        const updatedRecipe = formatRecipeData(req.body);

        await Recipe.findByIdAndUpdate(
            req.body.id,
            updatedRecipe,
            {
                new: true,
                runValidators: true
            }
        );
        res.redirect('/');
    } catch (err) {
        console.error("Failed to update recipe", err.message);
        res.status(500).send("There was an error updating the recipe");
    }
});

app.post('/recipe/create/submit', async (req, res) => {
    
    const completeRecipe = formatRecipeData(req.body);

    try {
        const newRecipe = new Recipe(completeRecipe);

        await newRecipe.save();

        res.redirect('/');
    } catch (err) {
        console.error("Failed to save recipe", err.message);
        res.status(500).send("There was an error saving the recipe");
    };
    
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});