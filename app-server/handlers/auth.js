const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = async function(req, res, next) {
    try {
        // finding a user
        // checking if their password matches what was sent to the server
        // if it all matches
        // log them in

        let user = await db.User.findOne({
            email: req.body.email
        });
        let { id, firstName, lastName, profileImageUrl } = user;
        let isMatch = await user.comparePassword(req.body.password);
        if (isMatch) {
            let token = jwt.sign(
                {
                    id,
                    firstName,
                    lastName,
                    profileImageUrl
                },
                process.env.SECRET_KEY
            );
            return res.status(200).json({
                id,
                firstName,
                lastName,
                profileImageUrl,
                token
            });
        } else {
            return next({
                status: 400,
                message: "Invalid Email/Password."
            });
        }
    } catch (err) {
        return next({
            status: 400,
            message: "Invalid Email/Password."
        });
    }
};

exports.signup = async function(req, res, next) {
    try {
        // create a user
        // create a token (signing a token)
        // SECRET_KEY is stored inside process.env.SECRET_KEY
        let user = await db.User.create(req.body);
        let { id, firstName, lastName, profileImageUrl } = user;

        let token = jwt.sign(
            {
                id,
                firstName,
                lastName,
                profileImageUrl
            },
            process.env.SECRET_KEY
        );

        return res.status(200).json({
            id,
            firstName,
            lastName,
            profileImageUrl,
            token
        });
    } catch (err) {
        // see what kind of error
        // if it is a certain error
        // respond with username/email is already taken
        // otherwise just send back generic 400

        if (err.code === 11000)
            err.message = "Sorry, that username/email is taken.";

        return next({
            status: 400,
            message: err.message
        });
    }
};
