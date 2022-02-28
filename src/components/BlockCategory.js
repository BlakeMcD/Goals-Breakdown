import React, { useState } from 'react'; 
import BlockItem from './BlockItem';

function BlockCategory() {

    //STATES
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState("Category");

    //FUNCTIONS
    const addBlockItem = () => {
        setItems([...items, "item"]);
      }

    const returnItems = () => {
        let allItems = [];
        for (let i = 0; i < items.length; i++) {
        allItems.push(<BlockItem key={i} className="sub-block-create">This is an Item</BlockItem>)
        } 
        return allItems;
    }

    const handleChange = (event) => {
      setCategory(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
    }

  return (
    <div className="block-category">
        <h3>{category}</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={category} onChange={handleChange}/>
        </form>
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