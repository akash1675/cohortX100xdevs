const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

const JWT_SECRET = "chindhapakdhamdham";
const { UserModel, TodoModel } = require("./db");
mongoose.connect("mongodb+srv://captaink_akash:rahul1675@100xdevs.xtw0e.mongodb.net/Todo-app-database");



const app = express();
app.use(express.json());

app.post("/signup", async function (req, resp) {
    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })

    // const parseData = requireBody.parse(req.body);
    const parseDataWithSuccess = requireBody.safeParse(req.body);
    
    if(!parseDataWithSuccess.success){
        resp.json({
            message:"Incorrect format"
        })
        return 
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;


    // if(typeof email !=='string'  || email.length < 5 || !email.includes("@")){
    //     resp.json({
    //         message:"Email incorrect"
    //     })
    //     return 
    // }

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

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

    const response = await UserModel.findOne({
        email: email,
    });

    if (!response) {
        resp.status(403).json({
            message: "user does not exist in our db"
        })
        return
    }

    const passwordmatch = bcrypt.compare(password, response.password);


    if (passwordmatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        resp.json({
            token
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
        userId: userId,
        title: title

    })

    resp.json({
        userId: userId
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
    const decodedata = jwt.verify(token, JWT_SECRET);

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


app.listen(4000);