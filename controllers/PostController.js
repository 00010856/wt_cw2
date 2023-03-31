const path = require('path');
const Post = require('../models/Post');

const showHomePage = async (req, res) => {
    const posts = await Post.find({});
    res.render('index', {posts});
}

const createPost = (req, res) => {
    res.render('create');
}

const storePost = async (req, res) => {
    try {
        const {image} = req.files;
        await image.mv(path.resolve(__dirname, '..', 'public/posts', image.name));
        await Post.create({
            ...req.body,
            image: `/posts/${image.name}`,
        });
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

const showPost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', {post});
}



const updatePost = async (req, res) => {
    try {
        let postData = {
            ...req.body
        };

        if (req.files) {
            const {image} = req.files;
            await image.mv(path.resolve(__dirname, '..', 'public/posts', image.name));
            postData.image = `/posts/${image.name}`;
        }

        await Post.findByIdAndUpdate(req.params.id, postData);
        res.redirect(`/posts/${req.params.id}`);
    } catch (error) {
        console.log(error);
    }
}

const deletePost = async (req, res) => {
    try {
        console.log(req.params.id);
        const post = await Post.findById(req.params.id);
        console.log(post);
        await post.remove();
        console.log('Post deleted');
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    showHomePage, createPost, storePost, showPost, updatePost, deletePost
}