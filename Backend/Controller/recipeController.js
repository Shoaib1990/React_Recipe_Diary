import mongoose from 'mongoose';
import { RecipeSchema } from '../Model/recipeModel';

const Recipe = mongoose.model('Recipe', RecipeSchema);

export const addNewRecipe = (req, res) => {
    let newRecipe = new Recipe(req.body);

    newRecipe.save((err, Recipe) => {
        if (err) {
            res.send(err);
        }
        res.json(Recipe);
    });
};

export const getRecipes = (req, res) => {
    Recipe.find({},(err, Recipe) => {
        if (err) {
            res.send(err);
        }
        res.json(Recipe);
    });
};

export const getRecipeById = (req, res) => {
    Recipe.findById(req.params.RecipeId,(err, Recipe) => {
        if (err) {
            res.send(err);
        }
        res.json(Recipe);
    });
};

export const updateRecipe = (req, res) => {
    Recipe.findOneAndUpdate({ _id: req.params.RecipeId },req.body, {new: true},(err, Recipe) => {
        if (err) {
            res.send(err);
        }
        res.json(Recipe);
    });
};

export const deleteRecipe = (req, res) => {
    Recipe.remove({_id: req.params.RecipeId},(err, Recipe) => {
        if (err) {
            res.send(err);
        }
        res.json({message: "The recipe has been delete"});
    });
};