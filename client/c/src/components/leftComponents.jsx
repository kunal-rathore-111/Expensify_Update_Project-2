

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
    return <table style={{ width: '100%' }}>

        <tr className="expenseComponent" style={{ width: "97%", display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
            <div > Title</div>
            <span >Amount</span>
            <div>Delete</div>
        </tr>
        <td className="LoadExpenseComponents" >
            {
                messages.map((d) => {
                    return <DesignedExpenses
                        title={d.title} category={d.category} amount={d.amount} key={d._id} _id={d._id}>
                    </DesignedExpenses>
                })
            }
        </td >
    </table >
}

function DesignedExpenses(props) {

    const { deleteExpense } = useContext(DataContext);


    return <tr className="expenseComponent" style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <div style={{ width: "35%" }} > {props.title}</div>
        <span style={{ width: "30%" }} > {props.amount}</span>
        <button className="deleteExpenseButton" style={{ width: "20%" }}
            onClick={() => { deleteExpense(props._id) }} >
            Delete  </button>
    </tr>
}

