const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const app = express();

const User = require("./models/User.js");

dotenv.config();
const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWT_TOKEN_SECRET;

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

    try {
        const newUser = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });

        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(422).json(error);
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const userData = await User.findOne({ email });

        if (userData) {
            const passIsOk = bcrypt.compareSync(password, userData.password);
            if (passIsOk) {
                jwt.sign(
                    { email: userData.email, id: userData._id },
                    jwtSecret,
                    {},
                    (error, token) => {
                        if (error) throw error;
                        res.cookie("token", token).json("password is ok");
                    }
                );
            } else {
                res.status(422).json("Login failed");
            }
        } else {
            res.status(422).json("Login failed");
        }
    } catch (error) {}
});

app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000 ...");
});
