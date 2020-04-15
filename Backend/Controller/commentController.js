import mongoose from 'mongoose';
import { CommentSchema } from '../Model/commentModel';

const Comment = mongoose.model('Comment',CommentSchema);

export const addNewComment = (req, res) => {
    let newComment = new Comment(req.body);

    newComment.save((err, Comment) => {
        if (err) {
            res.send(err);
        }
        res.json(Comment);
        

    })
}

export const getComments = (req, res) => {
    Comment.find({},(err, Comment) => {
        if (err) {
            res.send(err);
        }
        res.json(Comment);
        
    });
};