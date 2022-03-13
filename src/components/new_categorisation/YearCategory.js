import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addYearCategory } from './../../actions/actionCreator';
import CategoryIcon from './CategoryIcon';
import YearItem from './YearItem';

function YearCategory() {

    //VARIABLES
    
    const finance = "Finance";
    const health = "Health";
    const mentalWellbeing = "Mental Wellbeing";
    const relationships = "Relationships";
    const work = "Work";


    //STATE
    const [categoryName, setCategoryName] = useState("blank");
 
    //DISPATCH
    const dispatch = useDispatch();

    //FUNCTIONS
    const addCategoryToYear = () => {
        dispatch(addYearCategory({category: categoryName}))
    }

    const setStateOfCategoryName = (catName) => {
        console.log("setStateOfCategoryName code ran");
        setCategoryName(catName);
    }


    //RETURN VALUE
    return (
      <div>

          <p>This is a category block </p>

      </div>
    )
}

export default YearCategory