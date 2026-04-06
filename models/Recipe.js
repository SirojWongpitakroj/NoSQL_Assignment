import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
    
    recipeTitle: {
        type:String,
        required: true,
        trim: true
    },

    chefName: {
        type: String,
        required: true,
        trim: true
    },

    ingredients: [{
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        unit: { type: String, required: true }
    }],

    steps: [{
        type: String,
        required: true
    }],
    equipments: [{
        type: String,
        required: true
    }] 
}, {
    timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;