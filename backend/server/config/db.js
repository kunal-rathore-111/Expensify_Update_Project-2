
const mongoose = require("mongoose");

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGOO_DB_URL);
        console.log("db connected");
    } catch (error) {
        console.log("Error- ", error)
    }
}

module.exports = { connectDb };