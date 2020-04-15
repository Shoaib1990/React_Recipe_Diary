import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    chef: {
        type: String,
        required: true
    },
    preptime: {
        type: Number,
        required: true
    },
    cooktime: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    recipesToDo: {
        type: String,
        required: true 
    },
})