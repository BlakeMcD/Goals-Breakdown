import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addYearCategory } from './../../actions/actionCreator';
import { addYearCategoryItem } from '../../actions/actionCreator';
import CategoryIcon from './CategoryIcon';
import YearItem from './YearItem';

function YearCategory(props) {

    //DISPATCH
    const dispatch = useDispatch();

    //FUNCTIONS
    const addItemToCategory = () => {
        console.log("addItemToCategory is running")
        dispatch(addYearCategoryItem({category: props.categoryName}));
    }

    //RETURN
    return (
      <div className="yearCategory">

          <p>This is a category block and its name is {props.categoryName} </p>
          <button onClick={() => addItemToCategory()}>Clicking this will add an item to {props.categoryName}</button>
          {/* <YearItem categoryName={props.categoryName}></YearItem> */}

      </div>
    )
}

export default YearCategory