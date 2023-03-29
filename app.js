const express = require('express');
const app = express();
const {config, engine} = require('express-edge');
const expressFileUpload = require('express-fileupload');

const {showHomePage, createPost, storePost, showPost} = require('./controllers/PostController');
const {createUser, storeUser} = require('./controllers/UserController');

const db = require('./db');

app.use(express.static('public'));
app.use(express.json());
app.use(expressFileUpload());
app.use(express.urlencoded({extended: true}));

app.use(engine);
app.set('views', `${__dirname}/views`);

app.get('/', showHomePage);
app.get("/posts/new", createPost);
app.post("/posts/store", storePost);
app.get("/posts/:id", showPost);
app.get("/auth/register", createUser);
app.post("/auth/register", storeUser);

app.listen(5000, () => {
    console.log('Server started on port 5000');
});