
const mongoose = require("mongoose");

async function connectDb() {
    try {
        console.log("DB connecting...");
        await mongoose.connect(process.env.MONGOO_DB_URL);
        console.log("db connected");
    } catch (error) {
        console.log("Error in db coneecting- ", error)
    }
}

module.exports = { connectDb };