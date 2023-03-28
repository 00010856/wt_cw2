const showHomePage = (req, res) => {
    res.render('index');
}

const createPost = (req, res) => {
    res.render('create');
}

module.exports = {
    showHomePage, createPost
}