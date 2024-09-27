const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { adminModel, courseModel } = require("../db");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

const adminRouter = Router();


adminRouter.post("/signup", async function (req, resp) {
    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
        email,
        password,
        firstName,
        lastName
    })
    resp.json({
        message: " signup succesed"
    })
})


adminRouter.post("/signin", async function (req, resp) {
    const { email, password, firstName, lastName } = req.body;

    const admin = await adminModel.findOne({
        email,
        password,
        firstName,
        lastName
    })
    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD)

        resp.json({
            token: token
        })
    }
    else {
        resp.json({
            message: "Incorrect credential"
        })
    }

})


adminRouter.post("/course", adminMiddleware, async function (req, resp) {
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;

    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId
    })
    resp.json({
        message: "course created",
        courseId: adminId
    })
})


adminRouter.put("/course", adminMiddleware, async function (req, resp) {
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.updateOne(
        {
            _id: courseId,
            creatorId: adminId
        },
        {
            title: title,
            description: description,
            imageUrl: imageUrl,
            price: price
        })

    resp.json({
        message: "course updated",
        courseId: course._id
    })


})


adminRouter.get("/course/bulk", adminMiddleware, async function (req, resp) {
    const adminId = req.userId;

    const courses = await courseModel.find({
        creatorId: adminId
    });
    resp.json({
        message: "course updated",
        courses
    })

})


module.exports = {
    adminRouter: adminRouter,

}


