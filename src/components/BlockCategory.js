import React, { useState } from 'react'; 

function BlockCategory() {

    //STATES
    const [items, setItems] = useState([])

    //FUNCTIONS
    const addBlockItem = () => {
        setItems([...items, "item"]);
      }

    const returnItems = () => {
        let allItems = [];
        for (let i = 0; i < items.length; i++) {
        allItems.push(<p key={i} className="sub-block-create">This is an Item</p>)
        } 
        return allItems;
      }

  return (
    <div className="block-category">
        <h3>Category</h3>
        {returnItems()}
        <button onClick={addBlockItem}>Add an Item</button>
    </div>
  )
}

export default BlockCategory




// import React, { useState } from 'react';
// import SubBlock from './SubBlock';
// import { useSelector, useDispatch } from 'react-redux';
// import { addYear, addYearCat, deleteYear } from '../actions/actionCreator';


// function BlockYear() {

//     //VARIABLES

//     //STATES
//     // const dispatch = useDispatch();
//     // const [listItems, setListItems] = useState(["first item in array, second item in array"])
//     const [categories, setCategories] = useState([])

//     //FUNCTIONS
//     const addBlockCategory = () => {
//         setCategories([...categories, "category"]);
//       }

//     const returnCategories = () => {
//         let allCategories = [];
//         for (let i = 0; i < categories.length; i++) {
//         //   allCategories.push(<BlockYear key={`${i}`}/>)
//         allCategories.push(<p key={i} className="sub-block-create">This is a Category</p>)
//         } 
//         return allCategories;
//       }

//     // const addYearToStore = () => {
//     //     dispatch(addYear("2023"));
//     // }

//     // const addYearCatToStore = () => {
//     //     dispatch(addYearCat("Finance"));
//     // }

//     //return value
//     return (
//     <div className="block block-year">
//         <h3 className = "block-label">YEAR</h3>
//         {returnCategories()}
//         <button onClick={addBlockCategory}>Add A Category</button>
//     </div>
//     );
// }

// export default BlockYear;