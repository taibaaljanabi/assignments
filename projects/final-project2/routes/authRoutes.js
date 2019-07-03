const express = require('express')
const authRouter = express.Router()
const User = require("../models/user")
const jwt = require("jsonwebtoken")

authRouter.post("/signup", (req, res, next) => {
    console.log('fired')
    User.findOne({username: req.body.username}, (err, existingUser) => { 
        if (err) {
            res.status(501)
            return next(err)
        } else if (existingUser !== null){
            res.status(401)
            return next(new Error("That's username already exists!"))
        }
        const newUser = new User (req.body)
        newUser.save((err, user) => {
            if (err) return res.status(500).send({
                success: false, err})
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ user: user.withoutPassword(), token})
        })

    })
})


authRouter.post("/login", (req, res) => {
    User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) {
            return res.status(403).send({success: false, err: "Username or password are incorrect"})
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err);
            if (!match) res.status(401).send({ success: false, message: "Username or password are incorrect" });
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.send({ token: token, user: user.withoutPassword(), success: true })
        });
    });
})




module.exports = authRouter