const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");




adminRouter.post("/signup", function (req, resp) {
    resp.json({
        message: " signup endpoint"
    })
})


adminRouter.post("/signin", function (req, resp) {
    resp.json({

    })
})


adminRouter.post("/course", function (req, resp) {
    resp.json({

    })
})


adminRouter.put("/course", function (req, resp) {
    resp.json({

    })
})


adminRouter.get("/course/bulk", function (req, resp) {
    resp.json({

    })
})


module.exports = {
    adminRouter : adminRouter,
    adminModel:adminModel
}


