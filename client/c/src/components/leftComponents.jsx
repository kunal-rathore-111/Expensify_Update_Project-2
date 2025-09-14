

import { useContext } from "react";

import { DataContext } from "../contexts/dataContext";

import "./leftComponents.css";

export function LeftDiv() {
    return <div className='LeftDiv'>
        <ShowExpenses></ShowExpenses>
    </div>

}


function ShowExpenses() {
    const { data, loading } = useContext(DataContext);
    if (loading) { return <h2>Loading...</h2> }
    return <div className="Expenses">
        {loadData(data.message)}
    </div>
}

function loadData(messages) {
    return <div className="LoadExpenseComponents">
        {messages.map((d) => {
            return <DesignedExpenses
                title={d.title} category={d.category} amount={d.amount} key={d._id} _id={d._id}>
            </DesignedExpenses>
        })}
    </div>
}

function DesignedExpenses(props) {

    const { deleteExpense } = useContext(DataContext);


    return <div className="expenseComponent">
        <div className="expenseList">
            <div>Expense Title- {props.title}</div>
            <div>Category- {props.category}</div>
        </div>
        <span>Amount- {props.amount}</span>
        <button className="deleteExpenseButton"
            onClick={() => { deleteExpense(props._id) }} >
            Delete Button</button>
    </div>
}

