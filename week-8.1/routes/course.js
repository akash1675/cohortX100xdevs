// const express = require("express");
// const Router = express.Router;

const { Router } = require("express");
const { purchaseModel, courseModel } = require("../db");
const { userMiddleware } = require("../middleware/user");

const courseRouter = Router();


courseRouter.post("/purchase", userMiddleware, async function (req, resp) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    // you should check user is paid the price or not
    await purchaseModel.create({
        userId,
        courseId
    });

    resp.json({
        message: "you successfully bought the course."
    })
})



courseRouter.get("/preview", async function (req, resp) {
    const course = await courseModel.find({});
    resp.json({
        course
    })
})



module.exports = {
    courseRouter: courseRouter
}


