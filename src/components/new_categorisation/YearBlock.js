import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addYearCategory } from './../../actions/actionCreator';
import YearCategory from './YearCategory';
import CategoryIcon from './CategoryIcon';
import { editYearName } from './../../actions/actionCreator';

function YearBlock() {
    
  //VARIABLES
  const finance = "Finance";
  const health = "Health";
  const mentalWellbeing = "Mental Wellbeing";
  const relationships = "Relationships";
  const work = "Work";

  //STATE
  const [yearName, setYearName] = useState("2022");
  const [categoryName, setCategoryName] = useState("blank");

  //SELECTOR
  const categoriesArray = useSelector((state) => state.years[0].categories);

  //DISPATCHES
  const dispatch = useDispatch();

  const consoleLogObject = () => {
    console.log("categoriesArray")
    console.log(categoriesArray)
  }

  //FUNCTIONS
  const addCategoryToYear = (categoryName) => {
    console.log("addCategoryToYear")
    dispatch(addYearCategory({category: categoryName, items: []}))
  }

  const renderBlockCategories = () => {
      console.log("renderBlockCategories ran") 
      let allCategories = [];
      for (let i = 0; i < categoriesArray.length; i++) {
        allCategories.push(
          <YearCategory key={i} categoryName={categoriesArray[i].category}></YearCategory>
      )}
      return allCategories
  } 

  const handleChange = (event) => {
    setYearName(event.target.value);
  }

  const handleFocus = (event) => event.target.select();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editYearName({year: yearName}));
  }

  //RETURN
  return (
    <div className="yearBlock">
      <h1>{yearName}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={yearName} onFocus={handleFocus} onChange={handleChange}/>
      </form>
        <CategoryIcon categoryName={finance} iconClickedAddCat={addCategoryToYear}/>
        
        <CategoryIcon categoryName={health} iconClickedAddCat={addCategoryToYear}/>
        <CategoryIcon categoryName={mentalWellbeing} iconClickedAddCat={addCategoryToYear}/>
        <CategoryIcon categoryName={relationships} iconClickedAddCat={addCategoryToYear}/>
        <CategoryIcon categoryName={work} iconClickedAddCat={addCategoryToYear}/>

        <button onClick={consoleLogObject}>Console.log what's in state</button>
        {/* <button onClick={renderBlockCategories}>Render Block Categories</button> */}
        {renderBlockCategories()} 
    </div>
  )
}

export default YearBlock


