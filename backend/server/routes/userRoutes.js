
//libraries
const express = require("express");

//files
const { signUpMiddleware } = require("../middlewares/auth");

const user = express.Router();

user.post("/register", signUpMiddleware, (req, res, next) => {

    //store in db
    res.json({ message: "Signed up Successfully" });
})


user.post("/signin", (req, res, next) => {
    res.send("Login in Successful");
})




user.post("/isValid", (req, res) => {
    const isUserFound = req.isUserFound;
    res.json({ username: isUserFound.username });
})


module.exports = user;