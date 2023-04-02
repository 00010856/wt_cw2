const User = require("../models/User");

const authenticateUser = async (req, res,next) => {
    try {
        // Find the user by id
        const user = await User.findById(req.session.userId);
        if (user) {
            res.redirect("/");
        } else {
            next();
        }
        

    } catch (error) {
        console.error(error);
        res.redirect("/auth/login");
    }
};

module.exports = {authenticateUser};