
import { useContext, useState } from "react"

import { DataContext } from "../contexts/dataContext"

import "./rightComponenets.css";

import { ShowPie } from "./pieChart";

export function RightDiv() {
    return <div className='RightDiv1'>
        <div className="RightDiv2">

            <div style={{ height: "290px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                <ShowPie />
            </div>
            <AddExpenses></AddExpenses>
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

    return <>
        <div className="AddExpenses">
            <form className="AddExpenseInputs">

                <input value={title} onChange={(e) => { setTitle(e.target.value) }} type="text" placeholder="Enter Expense" required style={{ width: "200px" }} />

                <input value={amount} onChange={(e) => { setAmount(e.target.value) }} type="text" placeholder="Enter Value" required style={{ width: "200px" }} />

                <select name="category" value={category} onChange={(e) => { setCategory(e.target.value) }} required>
                    <option value="">-- Select Category --</option>
                    <option value="Housing">Housing</option>
                    <option value="Food">Food</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Utilites">Utilites</option>
                    <option value="Education">Education</option>
                </select>

                <button onClick={callAddExpense}>Add Expense</button>
            </form>
        </div>

    </>
}






