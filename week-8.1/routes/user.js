// const express = require("express");
// const Router = express.Router;
const {Router} = require("express");
const { userModel } = require("../db");


const userRouter = Router();

userRouter.post("/signup", async function (req, resp) {
    const {email, password, firstName, lastName} = req.body; // adding zod validation

    //Todo: hash the password so plaintext password is not stored in the db

    //Todo:put inside a try catch block
    await userModel.create({
        email,
        password,
        firstName,
        lastName
    })
    resp.json({
        message: " signup endpoint"
    })
})


userRouter.post("/signin", function (req, resp) {
    resp.json({

    })
})



userRouter.get("/purchases", function (Req, resp) {
    resp.json({
        message : ""
    })
})


module.exports = {
    userRouter : userRouter
}
