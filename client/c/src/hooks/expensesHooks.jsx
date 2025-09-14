

import { useState, useEffect } from "react";
import axios from "axios";

export function useExpense() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    async function getData() {

        setLoading(true);
        const response = await axios({
            url: "http://localhost:3000/api/user/expenseRoutes/fetchExpenses",
            method: "GET",
            withCredentials: true
        });
        const finalData = response.data; // it will have raw array of objects
        console.log(finalData);
        setData(finalData);
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, []);

    async function deleteExpense(expenseId) {
        console.log(expenseId);

        await axios({
            method: "DELETE",
            url: "http://localhost:3000/api/user/expenseRoutes/deleteExpense/" + expenseId
        });
        getData();
    }

    async function addExpense(expense) {

        await fetch("http://localhost:3000/api/user/expenseRoutes/addExpense",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(expense),
                credentials: "include",

            });
        getData();
    }




    return { data, loading, deleteExpense, addExpense };
}

