

import { useContext } from "react";

import { DataContext } from "../contexts/dataContext";

import "./leftComponents.css";

export function LeftDiv() {
    return <div className='LeftDiv' style={{ overflowY: "scroll" }} >
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
    return <td className="LoadExpenseComponents" >
        <tr className="expenseComponent">
            <div style={{ width: "40%", display: "flex", justifyContent: "center" }}> Title</div>
            <span style={{ width: "40%", display: "flex", justifyContent: "center" }}>Amount</span>
            <div style={{ width: "15%", display: "flex", justifyContent: "center" }}>Delete</div>
        </tr>
        {
            messages.map((d) => {
                return <DesignedExpenses
                    title={d.title} category={d.category} amount={d.amount} key={d._id} _id={d._id}>
                </DesignedExpenses>
            })
        }
    </td >
}

function DesignedExpenses(props) {

    const { deleteExpense } = useContext(DataContext);


    return <tr className="expenseComponent" style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ width: "40%", display: "flex", justifyContent: "center" }}> {props.title}</div>
        <span style={{ width: "40%", display: "flex", justifyContent: "center" }}> {props.amount}</span>
        <button className="deleteExpenseButton"
            onClick={() => { deleteExpense(props._id) }} >
            Delete  </button>
    </tr>
}

