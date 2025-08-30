













expense.delete("/delete", (req, res) => {
    const parseId = parseInt(req.body.parseId);
    deleteExpense(parseId);
    res.send("deleted");
})








expense.post("/add", (req, res) => {
    const expense_name = req.body.expense_name
    const expense_cost = req.body.expense_cost;
    const CategoryOfExpense = req.body.CategoryOfExpense;

    // now need to write the expense.json

    res.send("File updated");
})











//---- Fetch data

expense.get("/fetch", async (req, res) => {
    // check does token is valid 
    const token = req.headers.token;
    const usernameJSON = await axios({
        method: "POST",
        url: "http://localhost:3000/isValid",
        headers: { token: token }
    });
    if (usernameJSON.data.username) {
        username = usernameJSON.data.username;
        fetchExpenses();
        userIndex = expenses.findIndex((u) => { return (u.username == username) }) // returns the index of specific user which will be used in adding expenses later

        // now traverse data and find the username object matching all data
        const expenseofSpecificUser = expenses.find((e) => { return (e.username == username) });
        const respondExpenses = expenseofSpecificUser.expenses;
        console.log(respondExpenses);
        res.json({ respondExpenses: respondExpenses }); //need to change for expenses

    }
    else {
        res.send("INVALID TOKEN or USERNAME");
    }

})