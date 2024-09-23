// replace token with jwt
// jwt -> json web token

const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "jhdskhkshhbzsfbkehehsjdssexfuckoffhsj";
const app = express();
app.use(express.json());

const users = [];



app.post("/signUp", function (req, resp) {

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


app.post("/signIn", function (req, resp) {

    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }

    if (foundUser) { 
        const token = jwt.sign({
            username:username
        },JWT_SECRET);

        foundUser.token = token;
        resp.json({
            message: token
        })
    }
    else{
        resp.status(403).send({
            message: "invalid username or password"
        })
    }

    console.log(users);

})

app.get("/me", function(req, resp) {
    const token = req.headers.token; // jwt
    const decodedInformation = jwt.verify(token, JWT_SECRET); // {username : rahul@gmail.com}
    const username = decodedInformation.username;


    let foundUser = null;

    for(let i=0; i<users.length; i++){
        if(users[i].username === username){
            foundUser = users[i];
        }
    }

    if(foundUser){
        resp.json({
            username: foundUser.username,
            password:foundUser.password
        })
    }
    else{
        resp.json({
            message:"token invalid"
        })
    }

})


app.listen(4000); 

