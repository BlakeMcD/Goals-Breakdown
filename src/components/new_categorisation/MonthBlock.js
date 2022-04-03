import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMonth } from './../../actions/actionCreator'
import CategoryIcon from './CategoryIcon';
import { addMonthCategory, editMonthName } from './../../actions/actionCreator';
import MonthCategory from './MonthCategory';

function MonthBlock(props) {

  //VARIABLES
  const finance = "Finance";
  const health = "Health";
  const mentalWellbeing = "Mental Wellbeing";
  const relationships = "Relationships";
  const work = "Work";

  //STATE
  const [monthName, setMonthName] = useState("MonthTest");

  //SELECTOR
  const categoriesArray = useSelector((state) => state.years[0].months);

  // console.log("categoriesArray:", categoriesArray);
  console.log("Why isn't this running?")
  
  //FUNCTIONS
  const addCategoryToMonth = (categoryName) => {
    console.log("addCategoryToMonth")
    dispatch(addMonthCategory({uuid: props.uuid, category: categoryName, month: monthName, items: []}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //send dispatch
    dispatch(editMonthName({uuid: props.uuid, month: monthName}))
  }

  const handleFocus = (event) => event.target.select();

  const handleChange = (event) => {
    setMonthName(event.target.value)
  }
  
  const renderBlockCategories = () => {

    if (categoriesArray.length === 0) {
      return null
    }

    //find this particular month
    let thisMonth = categoriesArray.find(month => month.uuid === props.uuid);

    if (thisMonth === undefined) {
      return null
    }

    let allCategories = [];
    for (let i = 0; i < thisMonth.categories.length; i++) {
      allCategories.push(
        <MonthCategory key={i} categoryName={thisMonth.categories[i].category}></MonthCategory>
    )}
    return allCategories
  } 
  
  //DISPATCH
  const dispatch = useDispatch();

  //RETURN VALUE
  return (
    <div className="monthBlock ">
      <p>This month is {monthName}</p>
      <form onSubmit={handleSubmit} className="itemTextInput">
        <input type="text" value={monthName} onFocus={handleFocus} onChange={handleChange}/>
      </form>
      <button>Month: this button adds a month to the year</button>
      <CategoryIcon categoryName={finance} monthUuid={props.uuid} iconClickedAddCat={addCategoryToMonth}/>
      <CategoryIcon categoryName={health} monthUuid={props.uuid} iconClickedAddCat={addCategoryToMonth}/>
      <CategoryIcon categoryName={mentalWellbeing} monthUuid={props.uuid} iconClickedAddCat={addCategoryToMonth}/>
      <CategoryIcon categoryName={relationships} monthUuid={props.uuid} iconClickedAddCat={addCategoryToMonth}/>
      <CategoryIcon categoryName={work} monthUuid={props.uuid} iconClickedAddCat={addCategoryToMonth}/>
      {renderBlockCategories()} 
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