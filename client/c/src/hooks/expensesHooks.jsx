

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function useExpense() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    async function getData() {

        setLoading(true);
        try {

            const response = await axios({
                url: "https://expensify-e2oa.onrender.com/api/user/expenseRoutes/fetchExpenses",
                method: "GET",
                withCredentials: true
            });
            const finalData = response.data; // it will have raw array of objects
            console.log(finalData);
            setData(finalData);
            setLoading(false);
        }
        catch (err) {
            if (err.status === 404) {
                navigate("/")
            }
            else {
                alert("something went wrong");
            }

        }
    }
    useEffect(() => {
        getData();
    }, []);

    async function deleteExpense(expenseId) {
        console.log(expenseId);

        await axios({
            method: "DELETE",
            url: "https://expensify-e2oa.onrender.com/api/user/expenseRoutes/deleteExpense/" + expenseId
        });
        getData();
    }

    async function addExpense(expense) {

        await fetch("https://expensify-e2oa.onrender.com/api/user/expenseRoutes/addExpense",
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

