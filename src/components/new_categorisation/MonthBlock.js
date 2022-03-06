import React from 'react';
import { useDispatch } from 'react-redux';
import { addMonth } from './../../actions/actionCreator'

function MonthBlock() {
  //DISPATCH
  const dispatch = useDispatch();

  //FUNCTIONS
  const addMonthToYear = () => {
      dispatch(addMonth({month: "January"}))
  }

  //RETURN VALUE
  return (
  <button onClick={addMonthToYear}>Month: this button adds a month to the year</button>
  )
}

export default MonthBlock