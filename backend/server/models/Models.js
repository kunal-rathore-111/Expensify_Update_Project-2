
const mongoose = require("mongoose");

const users = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    profileUrl: { type: String }
});

const expenses = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "usersModel" },
    expenseTitle: { type: String, required: true },
    expenseDiscription: { type: String },
    category: { type: String, required: true }
}, { timestamps: true });

const usersModel = mongoose.model("usersModel", users);
const expensesModel = mongoose.model("expensesModel", expenses);

module.exports = { usersModel, expensesModel };