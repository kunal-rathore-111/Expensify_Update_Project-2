
const express = require("express");
const user = require("./routes/userRoutes");
const app = express();

app.use(express.json());

app.use("/api/user", user);



app.listen(3000, () => { console.log("Server started") });
