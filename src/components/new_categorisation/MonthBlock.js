import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMonth } from './../../actions/actionCreator'
import CategoryIcon from './CategoryIcon';
import { addMonthCategory, editMonthName } from './../../actions/actionCreator';

function MonthBlock(props) {

  //VARIABLES
  //VARIABLES
  const finance = "Finance";
  const health = "Health";
  const mentalWellbeing = "Mental Wellbeing";
  const relationships = "Relationships";
  const work = "Work";

  //STATE
  const [monthName, setMonthName] = useState("MonthTest");
  
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
      <CategoryIcon categoryName={finance} iconClickedAddCat={addCategoryToMonth}/>
      <CategoryIcon categoryName={health} iconClickedAddCat={addCategoryToMonth}/>
      <CategoryIcon categoryName={mentalWellbeing} iconClickedAddCat={addCategoryToMonth}/>
      <CategoryIcon categoryName={relationships} iconClickedAddCat={addCategoryToMonth}/>
      <CategoryIcon categoryName={work} iconClickedAddCat={addCategoryToMonth}/>
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