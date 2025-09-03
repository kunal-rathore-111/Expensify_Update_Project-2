
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");


//files
const user = require("./routes/userRoutes");
const { connectDb } = require("./config/db");
const passport = require("passport");
require("./config/passport");
connectDb();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
//session
app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        secure: process.env.COOKIE_SECURE === "production",
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24 * 7 // after 7days session will be invaid (user log out)
    }
}));

app.use(passport.initialize());
app.use(passport.session());



const PORT = process.env.PORT;

app.use("/api/user", user);


app.listen(PORT, () => { console.log("Server started") });