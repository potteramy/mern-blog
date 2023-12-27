const routher = require("express").Router();
 const {
    createPost,
    getAllPosts,
    getOnePost,
    editPost,
    deletePost,
 } = require("../../controllers/post-controller")

 