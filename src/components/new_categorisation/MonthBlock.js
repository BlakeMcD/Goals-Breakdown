import React from 'react';
import { useDispatch } from 'react-redux';
import { addMonth } from './../../actions/actionCreator'

function MonthBlock(props) {
  
  //VARIABLES
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //RETURN VALUE
  return (
    <div className="monthBlock ">
      <p>This month is {props.month}</p>
      <button>Month: this button adds a month to the year</button>
    </div>
  )
}

export default MonthBlock


//OLD CODE 
//DISPATCH
// const dispatch = useDispatch();

// //FUNCTIONS
// const addMonthToYear = () => {
//     dispatch(addMonth({month: "February"}))
// }

// //RETURN VALUE
// return (
// <button onClick={addMonthToYear}>Month: this button adds a month to the year</button>
// )