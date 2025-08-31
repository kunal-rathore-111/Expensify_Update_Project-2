//libraries
const express = require("express");
require("dotenv").config();

//files
const user = require("./routes/userRoutes");
const { connectDb } = require("./config/db");

const app = express();
const PORT = process.env.PORT;
connectDb();

app.use(express.json());
app.use("/api/user", user);


app.listen(PORT, () => { console.log("Server started") });