// const express = require("express");
// const Router = express.Router;
const {Router} = require("express");
const jwt = require("jsonwebtoken");
const { userModel, purchaseModel, courseModel } = require("../db");
const {JWT_USER_PASSWORD} = require("../config");
const { userMiddleware } = require("../middleware/user");


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
        message: " signup succesed"
    })
})


userRouter.post("/signin", async function (req, resp) {
  const {email, password} = req.body;
  
  const user = await userModel.findOne({
    email : email,
    password : password
  });

  if(user){
    const token = jwt.sign({
        id : user._id
    }, JWT_USER_PASSWORD)

    // you can use cookie login
    resp.json({
        token:token
    })
  }
  else{
    resp.status(403).json({
        message : "incorrect credentials"
    })
  }

})



userRouter.get("/purchases",userMiddleware,async function (req, resp) {
    const userId = req.userId;

    const purchase = await purchaseModel.find({
        userId,
    });

    let purchasedCourseIds = [];

    for(let i=0; i<purchase.length; i++){
        purchasedCourseIds.push(purchase[i].courseId);
    }

    const courseData = await courseModel.find({
        _id: {$in : purchasedCourseIds}
    })


    resp.json({
        purchase,
        courseData
    })
})


module.exports = {
    userRouter : userRouter,
}
