import React, { useState } from 'react';
import SubBlock from './SubBlock';
import { useSelector, useDispatch } from 'react-redux';
import { addYear, addYearCat, deleteYear } from '../actions/actionCreator';
import BlockCategory from './BlockCategory';


function BlockYear(props) {

    //VARIABLES

    //STATES
    // const dispatch = useDispatch();
    // const [listItems, setListItems] = useState(["first item in array, second item in array"])
    const [categories, setCategories] = useState([])

    //FUNCTIONS
    const addBlockCategory = () => {
        setCategories([...categories, "category"]);
      }

    const returnCategories = () => {
        let allCategories = [];
        for (let i = 0; i < categories.length; i++) {
        //   allCategories.push(<BlockYear key={`${i}`}/>)
        allCategories.push(<BlockCategory key={i} className="sub-block-create">This is a Category</BlockCategory>)
        } 
        return allCategories;
      }

    // const addYearToStore = () => {
    //     dispatch(addYear("2023"));
    // }

    // const addYearCatToStore = () => {
    //     dispatch(addYearCat("Finance"));
    // }

    //return value
    return (
    <div className="block block-year">
        <h3 className = "block-label">{props.name}</h3>
        {returnCategories()}
        <button onClick={addBlockCategory}>Add A Category</button>
    </div>
    );
}

export default BlockYear;
