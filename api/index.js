const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const app = express();

const User = require("./models/User.js");

dotenv.config();
const bcryptSalt = bcrypt.genSaltSync(10);

app.use(express.json());

app.use(
    cors({
        credentials: true,
        origin: "http://localhost:5173",
    })
);

mongoose.connect(process.env.MONGOOSE_API_KEY);

app.get("/test", (req, res) => {
    res.json("server test");
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const newUser = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(newUser);
});

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000 ...");
});
