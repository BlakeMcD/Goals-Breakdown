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

    const addItemToCategory = () => {

    }

    //RETURN VALUE
    return (
      <div>
        <button onClick={addCategoryToYear}>YearCategory: this button adds a category to the year. It's current state is: {categoryName}</button>
        <div>
          <CategoryIcon categoryName={finance} handleCategoryNameChange={setStateOfCategoryName}/>
        
          <CategoryIcon categoryName={health} handleCategoryNameChange={setStateOfCategoryName}/>
          <CategoryIcon categoryName={mentalWellbeing} handleCategoryNameChange={setStateOfCategoryName}/>
          <CategoryIcon categoryName={relationships} handleCategoryNameChange={setStateOfCategoryName}/>
          <CategoryIcon categoryName={work} handleCategoryNameChange={setStateOfCategoryName}/>

          <YearItem></YearItem>



        </div>
      </div>
    )
}

export default YearCategory