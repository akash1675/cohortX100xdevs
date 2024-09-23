// const express = require("express");
// const Router = express.Router;
const {Router} = require("express");

const userRouter = Router();


userRouter.get("/purchases", function (Req, resp) {
    resp.json({
        message : ""
    })
})


module.exports = {
    userRouter : userRouter
}
