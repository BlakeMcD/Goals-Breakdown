import React from 'react';
import { useDispatch } from 'react-redux';
import { addYear } from './../../actions/actionCreator';

function YearBlock() {
    
    //DISPATCHES

    const dispatch = useDispatch();

    const addYearToStore = () => {
        dispatch(addYear({year: "2023"}));
    }

    // const addYearCatToStore = () => {
    //     dispatch(addYearCat("Finance"));
    // }

    //RETURN
  return (
    <button onClick={addYearToStore}>YearBlock: this button adds another year to store</button>
  )
}

export default YearBlock


