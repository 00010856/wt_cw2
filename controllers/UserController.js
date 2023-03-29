const User = require('../models/User');

const createUser = (req, res) => {
    res.render('register');
};

const storeUser = async (req, res) => {
    try {
        await User.create({
            ...req.body,
        });
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    createUser, storeUser
};