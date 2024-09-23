const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "chindhapakdhamdham";
const { UserModel, TodoModel } = require("./db");
mongoose.connect("mongodb+srv://captaink_akash:rahul1675@100xdevs.xtw0e.mongodb.net/Todo-app-database");



const app = express();
app.use(express.json());

app.post("/signup", async function (req, resp) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;


    const hashedPassword = await bcrypt.hash(password, 5);

    await UserModel.create({
        email: email,
        password: hashedPassword,
        name: name
    })

    resp.json({
        message: "you are loggen in"
    })

});


app.post("/signin", async function (req, resp) {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        }, JWT_SECRET);
        resp.json({
            token: token
        });
    }
    else {
        resp.status(403).json({
            message: "Incorrect credentials!"
        })
    }
});



app.post("/todo", auth, async function (req, resp) {
    const userId = req.userId;
    const title = req.body.title;

   await TodoModel.create({
        userId : userId,
        title : title
       
    })

    resp.json({
        userId:userId
    })

});

app.get("/todos", auth, async function (req, resp) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })

    resp.json({
        todos
    })
});

function auth(req, resp, next) {
    const token = req.headers.token;
    const decodedata = jwt.verify(token,JWT_SECRET);

    if (decodedata) {
        req.userId = decodedata.id;
        next();
    }
    else {
        resp.status(403).json({
            message: "Incorrect credentials"
        })
    }
}


app.listen(3000);