const express = require("express");
const mongoose = require("mongoose");


const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());


app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/course", courseRouter)





async function main() {
    await mongoose.connect("mongodb+srv://captaink_akash:rahul1675@100xdevs.xtw0e.mongodb.net/course-app");
    app.listen(3000);
    console.log("listen in  3000");
}

main();



