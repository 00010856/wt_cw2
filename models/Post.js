const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});
const Post = mongoose.model("Post", PostSchema);
module.exports = Post;