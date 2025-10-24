import { useContext, useState } from "react"

import { DataContext } from "../contexts/dataContext"

import "./rightComponenets.css";

import { ShowPie } from "./pieChart";

export function RightDiv() {
    return <div className='RightDiv1'>
        <div className="RightDiv2">
            <div className="chartSection">
                <h3>Spending by Category</h3>
                <div style={{ height: "180px", width: "100%" }}>
                    <ShowPie />
                </div>
            </div>
            <div className="AddExpenses">
                <h3>Add New Expense</h3>
                <AddExpenses></AddExpenses>
            </div>
        </div>
    </div>
}


function AddExpenses() {

    const { addExpense } = useContext(DataContext);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState("");

    function callAddExpense() {
        addExpense({ title, amount, category });
    }

    return (
        <form className="AddExpenseInputs" onSubmit={(e) => { e.preventDefault(); callAddExpense(); }}>
            <div className="inputGroup">
                <label htmlFor="expenseTitle">Expense Title</label>
                <input
                    id="expenseTitle"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    type="text"
                    placeholder="e.g., Groceries, Rent"
                    required
                />
            </div>

            <div className="inputGroup">
                <label htmlFor="expenseAmount">Amount ($)</label>
                <input
                    id="expenseAmount"
                    value={amount}
                    onChange={(e) => { setAmount(e.target.value) }}
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    required
                />
            </div>

            <div className="inputGroup">
                <label htmlFor="expenseCategory">Category</label>
                <select
                    id="expenseCategory"
                    name="category"
                    value={category}
                    onChange={(e) => { setCategory(e.target.value) }}
                    required
                >
                    <option value="">Select a category</option>
                    <option value="Housing">Housing</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Education">Education</option>
                </select>
            </div>

            <button type="submit">Add Expense</button>
        </form>
    )
}






