import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addYearCategory } from './../../actions/actionCreator';
import CategoryIcon from './CategoryIcon';
import YearItem from './YearItem';

function YearCategory(props) {

    //RETURN
    return (
      <div className="yearCategory">

          <p>This is a category block and its name is {props.categoryName} </p>

      </div>
    )
}

export default YearCategory