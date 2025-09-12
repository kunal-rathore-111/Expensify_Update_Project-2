import './expenses.css';
import {LeftDiv } from '../components/showComponents';

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






function RightDiv() {
  return <div className='RightDiv'>
    
    </div>

}
