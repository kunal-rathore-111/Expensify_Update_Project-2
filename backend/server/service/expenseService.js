
const { expensesModel } = require("../models/Models");

async function fetchExpensesFunction(userId) {


    return result = await expensesModel.find(
        {
            userId: userId
        });

}


async function storeExpensesFunction(userId, data) {

    const { title, amount, category } = data;

    const result = await expensesModel.create(
        {
            title: title,
            amount: amount,
            category: category,
            userId: userId
        });
    if (!result) {
        const error = new Error("Error while storing the expense");
        error.type = "storingError";
        throw error;
    }

}


async function deleteExpensesFunction(expenseId) {

    const isDeleted = await expensesModel.deleteOne(
        {
            _id: expenseId
        });
    if (isDeleted.deletedCount === 0) {
        const error = new Error("Invalid expense");
        error.type = "deletingError";
        throw error;
    }


}

module.exports = { fetchExpensesFunction, storeExpensesFunction, deleteExpensesFunction };