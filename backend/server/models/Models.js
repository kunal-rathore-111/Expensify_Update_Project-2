
const mongoose = require("mongoose");

const users = new mongoose.Schema({
    userName: { type: String, unique: true },
    password: { type: String }
});

const expenses = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "usersModel" },
    expense: { type: String }
});

const usersModel = mongoose.model("usersModel", users);
const expensesModel = mongoose.model("expensesModel", expenses);

module.exports = { usersModel, expensesModel };