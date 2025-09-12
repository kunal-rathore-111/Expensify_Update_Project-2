
import { useContext, createContext } from "react";
import { useFetch } from "../hooks/expensesHooks";

import "./components.css";
const DataContext = createContext();
//main
export function LeftDiv() {
    return <div className='LeftDiv'>
        <DataContextProvider>
            <ShowExpenses></ShowExpenses>
        </DataContextProvider>
    </div>

}

function DataContextProvider({ children }) {
    const url = "http://localhost:3000/api/user/expenseRoutes/fetchExpenses", method = "GET";

    const { data, loading, deleteExpense } = useFetch(url, method);


    return <DataContext.Provider value={{ data, loading, deleteExpense }} >
        {children}
    </DataContext.Provider>
}

function ShowExpenses() {
    const { data, loading } = useContext(DataContext);
    return <div className="Expenses">
        {loading ? "Loading..." : loadData(data.message)}
    </div>
}

function loadData(messages) {

    return <div className="LoadExpenseComponents">
        {messages.map((d) => {
            return <DesignedExpenses
                title={d.title} category={d.category} amount={d.amount} _id={d._id}>
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

