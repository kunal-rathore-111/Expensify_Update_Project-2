

const express = require("express");
const { fetchExpensesFunction, storeExpensesFunction, deleteExpensesFunction } = require("../service/expenseService");
const expenseRoutes = express.Router();

expenseRoutes.get("/", (req, res, next) => {     // need to define middleware isLogged in
    res.json({ message: "This is the success redirect route of google auth" });
});


expenseRoutes.post("/addExpense", async (req, res, next) => {
    try {
        const userId = req.user._id;
        await storeExpensesFunction(userId, req.body);
        res.json({ message: "Expense added" });

    } catch (error) {
        console.log("error in storeExpense Route- " + error);
        res.json({ message: error.message });
    }
})


expenseRoutes.get("/fetchExpenses", async (req, res, next) => {
    try {
        const userId = req.user._id; // after passport deserialize
        const result = await fetchExpensesFunction(userId);
        res.json({ expenses: result });
    } catch (error) {
        console.log("error in fetchexpense Route- " + error);
        res.json({ message: error.message });
    }

})

expenseRoutes.delete("/deleteExpense/:expenseId", async (req, res, next) => {
    try {
        await deleteExpensesFunction(req.params.expenseId);
        res.json({ message: "Expense deleted" });

    } catch (error) {
        console.log("error in deleteExpense Route- " + error);
        res.json({ message: error.message });
    }
})

module.exports = expenseRoutes;