
const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "jhdskhkshhbzsfbkehehsjdssexfuckoffhsj";
const app = express();
app.use(express.json());

const users = [];

function logger(req, resp, next) {
    console.log(req.method + "request came");
    next();
}

app.get("/", function (req, resp) {
    resp.sendFile(__dirname + "/public/index.html");
})

app.post("/signUp", logger, function (req, resp) {

    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    resp.json({
        message: "You are signed up"
    })

    console.log(users);
})


app.post("/signIn", logger, function (req, resp) {

    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }

    if (!foundUser) {
        resp.json({
            message: "invalid username or password"
        })
        return
    }
    else {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET);

        resp.header("jwt", token);
        resp.header("random","rahul");

        resp.json({
            token : token
        });
    }

    console.log(users);

});

function auth(req, resp, next) {
    const token = req.headers.token;
    const decodeData = jwt.verify(token, JWT_SECRET);
    const username = decodeData.username;

    if (username) {
        req.username = username;
        next();
    }
    else {
        resp.json({
            message: "you are not logged in."
        })
    }
}

app.get("/me", logger, auth, function (req, resp) {

    const currentuser = req.username;
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === currentuser) {
            foundUser = users[i];
        }
    }

    resp.json({
        username: foundUser.username,
        password: foundUser.password
    });

})


app.listen(5000);

