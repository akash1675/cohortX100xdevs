// const express = require("express");
// const Router = express.Router;

 const {Router} = require("express"); 
 
const courseRouter = Router();


courseRouter.post("/purchase", function (Req, resp) {
    resp.json({
        massage : "endpoint"
    })
})

courseRouter.get("/preview", function (Req, resp) {
    resp.json({
        message: "course preview endpoint"
    })
})



module.exports = {
    courseRouter: courseRouter
}


