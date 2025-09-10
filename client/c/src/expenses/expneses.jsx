import { createContext, useContext } from 'react';
import './expenses.css';
import {DataContextProvider, ShowExpenses } from './showComponents';

export const ExpensePage = () => {

  return (
    <div className="ExpensePage page">
     
       <div className='FullPage'>
        <LeftDiv/>
        <RightDiv/>
         </div>

    </div>
  );
};



function LeftDiv() {
  return <div className='LeftDiv'>
        <DataContextProvider>
          <ShowExpenses></ShowExpenses>
        </DataContextProvider>
  <div className='Expenses'></div>
    </div>

}



function RightDiv() {
  return <div className='RightDiv'>
    
    </div>

}
