const express = require('express');
const app = express();
const {config, engine} = require('express-edge');
const {showHomePage} = require('./controllers/PostController');
const db = require('./db');
app.use(express.static('public'));
app.use(engine);
app.set('views', `${__dirname}/views`);

app.get('/', showHomePage);


app.listen(5000, () => {
    console.log('Server started on port 5000');
});