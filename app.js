const MongoStore = require('connect-mongo');
const express = require('express');
const app = express();
const {config, engine} = require('express-edge');
const expressFileUpload = require('express-fileupload');
const session = require('express-session');
const methodOverride = require('method-override');


const {showHomePage, createPost, storePost, showPost, deletePost, updatePost} = require('./controllers/PostController');
const {createUser, storeUser, showLoginPage, loginUser} = require('./controllers/UserController');

const db = require('./db');

app.use(express.static('public'));
app.use(express.json());
app.use(expressFileUpload());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));


app.use(engine);
app.set('views', `${__dirname}/views`);
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: "mongodb://0.0.0.0:27017/wt_cw2",
    }),
}));

app.get('/', showHomePage);
app.get("/posts/new", createPost);
app.post("/posts/store", storePost);
app.get("/posts/:id", showPost);

app.post("/posts/:id", deletePost);
app.post("/posts/:id", updatePost);

app.get("/auth/register", createUser);
app.post("/auth/register", storeUser);
app.get("/auth/login", showLoginPage);
app.post("/auth/login", loginUser);


app.listen(5000, () => {
    console.log('Server started on port 5000');
});