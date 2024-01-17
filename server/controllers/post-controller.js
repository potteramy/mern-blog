const { Post } = require('../models');
const { ObjectId} = require("mongoose").Types;
module.exports = {
    //Get all
    async getPosts(req,res){
        try {
            const postData = await Post.find();
            res.json(postData)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //new blog post
    async createPost( req, res) {
        try {
        const postData = await Post.create(req.body);
        res.json(postData)
    } catch (err) {
        res.status(500).json(err)
    }
},
    //Get post by id
    async getSinglePost(req, res) {
        try {
            const postData = Post.findById(req,params.postId)
            res.json(postData)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    //Put update post by id
    async postUpdate (req, res) {
        try {
            const postData = await Post.findByIdAndUpdate(
                req.params.thoughtId,
                rep.body,
                {new: true}
            );
            if(!postData){
                res.json({message: "no post by that ID"})
            }
            res.json(postData)
        } catch (err) {
            res.status(500).json(err)
        }
    },

// GET POST BY DATE? come back to this

//Delete by id
    async deletePost (req, res) {
        try {
            const postData= await Post.findByIdAndDelete
        }
    }
    
}