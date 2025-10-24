

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
    
    if (loading) { 
        return <div className="Expenses">
            <div style={{ padding: '40px', textAlign: 'center', color: '#64748b' }}>
                <h2>Loading your expenses...</h2>
            </div>
        </div>
    }
    
    const totalAmount = data.message.reduce((sum, expense) => sum + expense.amount, 0);
    
    return <div className="Expenses">
        <div className="expensesHeader">
            <h2>Your Expenses</h2>
            <div className="totalAmount">${totalAmount.toFixed(2)}</div>
        </div>
        {loadData(data.message)}
    </div>
}

function loadData(messages) {
    if (messages.length === 0) {
        return <div className="LoadExpenseComponents">
            <div className="emptyState">
                <h3>No expenses yet</h3>
                <p>Start adding your expenses to track your spending</p>
            </div>
        </div>
    }
    
    return <div className="LoadExpenseComponents">
        <div className="expenseTableHeader">
            <div>Expense</div>
            <div>Amount</div>
            <div>Action</div>
        </div>
        {
            messages.map((d) => {
                return <DesignedExpenses
                    title={d.title} 
                    category={d.category} 
                    amount={d.amount} 
                    key={d._id} 
                    _id={d._id}>
                </DesignedExpenses>
            })
        }
    </div>
}

function DesignedExpenses(props) {
    const { deleteExpense } = useContext(DataContext);

    return <div className="expenseComponent">
        <div className="expenseTitle">
            {props.title}
            <span className="expenseCategory">{props.category}</span>
        </div>
        <div className="expenseAmount">
            ${parseFloat(props.amount).toFixed(2)}
        </div>
        <button 
            className="deleteExpenseButton"
            onClick={() => { deleteExpense(props._id) }}
        >
            Delete
        </button>
    </div>
}

