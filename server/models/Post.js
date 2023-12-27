const { Schema, model} = require("mongoose");

const postSchema = new Schema(
    {
        post: {
            type: String,
            required: true,
        },
        currDate: {
            type: String,
            default: Date.now(),
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

postSchema.virtual("dateFormat").get(function () {});
const Post = model("Post", postSchema);
module.exports = Post;