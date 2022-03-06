import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addYearCategory } from './../../actions/actionCreator';
import CategoryIcon from './CategoryIcon';

function YearCategory() {

    //VARIABLES
    
    const finance = "Finance";
    const health = "Health";
    const mentalWellbeing = "Mental Wellbeing";
    const relationships = "Relationships";
    const work = "Work";


    //STATE
    const [categoryName, setCategoryName] = useState("blank")

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
        <button onClick={addCategoryToYear}>YearCategory: this button adds a category to the year. It's current state is: {categoryName}</button>
        <div>
          <CategoryIcon icon={finance} handleCategoryNameChange={setStateOfCategoryName}/>
          <CategoryIcon icon={health} handleCategoryNameChange={setStateOfCategoryName}/>
          <CategoryIcon icon={mentalWellbeing} handleCategoryNameChange={setStateOfCategoryName}/>
          <CategoryIcon icon={relationships} handleCategoryNameChange={setStateOfCategoryName}/>
          <CategoryIcon icon={work} handleCategoryNameChange={setStateOfCategoryName}/>

        </div>
      </div>
    )
}

export default YearCategory