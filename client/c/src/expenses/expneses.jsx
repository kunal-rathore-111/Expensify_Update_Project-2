

import "./expenses.css"

export const ExpensePage = () => {
    return <div className="ExpensePage page">
        <div id="expenses">

            <div className="leftDiv">
                <div id="storeExpenses"></div>
            </div>
            <br />
            <div className="rightDiv">

                <div id="piechart"></div>

                <div className="getAndaddExpensesDiv">
                    <br />
                    <div className="addExpensesDiv">
                        <input type="text" placeholder="Expense name" id="expenseName" />
                        <input type="text" placeholder="Amount" id="expenseAmount" />

                        <label for="CategoryOfExpense">Category</label>
                        <select name="Category" id="CategoryOfExpense">
                            <option value="Housing">Housing</option>
                            <option value="Food & Groceries">Food & Groceries</option>
                            <option value="Transportation">Transportation</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Education & Study">Education & Study</option>
                            <option value="Finance & Debt">Finance & Debt</option>
                        </select>
                        <button onClick="addExpenses()" id="addExpenses"> Add Expenses</button>
                    </div>
                </div>
            </div>

        </div>
        <br /> <br />
        <button onClick="logOut()" id="logOut">Log out</button>


    </div>
}

