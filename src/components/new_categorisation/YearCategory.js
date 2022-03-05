import React from 'react';
import { useDispatch } from 'react-redux';
import { addYearCategory } from './../../actions/actionCreator'

function YearCategory() {

    //DISPATCH
    const dispatch = useDispatch();

    //FUNCTIONS
    const addCategoryToYear = () => {
        dispatch(addYearCategory({category: "Finance"}))
    }

    //RETURN VALUE
  return (
    <button onClick={addCategoryToYear}>YearCategory: this button adds a category to the year</button>
  )
}

export default YearCategory