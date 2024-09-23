// const express = require("express");
// const Router = express.Router;
const {Router} = require("express");

const userRouter = Router();

userRouter.post("/signup", function (req, resp) {
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
