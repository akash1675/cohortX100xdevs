const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'})


console.log(process.env.MONGO_URL); // just checking the mongo db url





const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();
app.use(express.json());


app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter)




async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(3000);
    console.log("listen in  3000");
}

main();



