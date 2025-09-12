

import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(url, method) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    async function getData() {

        setLoading(true);
        const response = await axios({
            url: url,
            method: method,
            withCredentials: true
        });
        const finalData = response.data; // it will have raw array of objects
        console.log(finalData);
        setData(finalData);
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, [url]);

    async function deleteExpense(expenseId) {

        await axios({
            method: "DELETE",
            url: "http://localhost:3000/api/user/expenseRoutes/deleteExpense/" + expenseId
        });

        getData();

    }
    return { data, loading, deleteExpense };
}

