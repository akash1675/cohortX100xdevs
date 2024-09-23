// Middleware

const express = require('express');
const app = express();


function isOldEnoughMiddleware(req, resp, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    }
    else {
        resp.json({
            msg: "sorry you are not allowed.",
        });
    }
}

//app.use(isOldEnoughMiddleware); // universal middleware you can use every without indiviual calling

app.get("/ride1", isOldEnoughMiddleware, function (req, resp) {
    resp.json({
        msg: "you have successfully riden the ride 1"
    })
    resp.status(411).json({
        msg: "sorry you are not allowed."
    })
})

app.get("/ride2", isOldEnoughMiddleware, function (req, resp) {
    resp.json({
        msg: "you have successfully riden the ride 2"
    })

    resp.status(411).json({
        msg: "sorry you are not allowed."
    })
});

app.listen(4000);