import { useContext, createContext } from "react";
import { useFetch } from '../hooks/expensesHooks';



const DataContext = createContext();

export function DataContextProvider({children}){
  const url = "http://localhost:3000/api/user/expenseRoutes/fetchExpenses",method ="GET";

  const  {data, loading} = useFetch(url,method);
  

  return <DataContext.Provider value={{data,loading}} >
    {children}
  </DataContext.Provider>
}

export function DesignedExpenses(props)
{
  return  <div>
    <h2>{props.title}</h2>
    <h2>{props.discription}</h2>
  </div>
}


export function loadData(messages){
  
     return <div>
         {messages.map((d)=> {return <DesignedExpenses 
         title={d.expenseTitle} discription={d.expenseDiscription}></DesignedExpenses>})}  
     </div>
 

}

export function ShowExpenses(){
  const {data,loading} = useContext(DataContext);
  console.log(data);
  return <div>
    {loading ? "Loading...": loadData(data.message)}
  </div> 
}