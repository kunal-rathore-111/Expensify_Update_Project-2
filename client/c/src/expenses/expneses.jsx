import './expenses.css';
import { LeftDiv } from '../components/leftComponents';
import { RightDiv } from '../components/rightComponents';


import { DataContextProvider } from '../contexts/dataContext';

export const ExpensePage = () => {

  return (
    <div className="ExpensePage page">
      <DataContextProvider>
        <div className='FullPage'>
          <LeftDiv />
          <RightDiv />
        </div>
      </DataContextProvider>
    </div>
  );
};

