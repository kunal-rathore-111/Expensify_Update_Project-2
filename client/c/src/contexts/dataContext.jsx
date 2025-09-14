import { createContext } from "react";


export const DataContext = createContext();
//main

import { useExpense } from "../hooks/expensesHooks";

export function DataContextProvider({ children }) {

    const { data, loading, deleteExpense, addExpense } = useExpense();


    return <DataContext.Provider value={{ data, loading, deleteExpense, addExpense }} >
        {children}
    </DataContext.Provider>
}