
const mongoose = require("mongoose");

const users = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    profileUrl: { type: String }
});

const expenses = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "usersModel" },
    title: { type: String, required: true },
    category: { type: String, required: true },   // need to add enum for category 
    amount: { type: Number, required: true }
}, { timestamps: true });

const usersModel = mongoose.model("usersModel", users);
const expensesModel = mongoose.model("expensesModel", expenses);

module.exports = { usersModel, expensesModel };