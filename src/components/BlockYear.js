import React, { useState } from 'react';
import SubBlock from './SubBlock';
import { useSelector, useDispatch } from 'react-redux';
import { addYear, deleteYear } from '../actions/actionCreator';


function BlockYear() {


    //states
    // const items = useSelector(state => state.year);
    const dispatch = useDispatch();
    const [listItems, setListItems] = useState(["first item in array, second item in array"])

    //functions
    const createSubBlock = (event) => {
        console.log("button clicked")
        setListItems(listItems.concat(<p>This is an additional list item</p>))
        // dispatch(addItem(listItems.toString()));
    }

    const addYearToStore = () => {
        dispatch(addYear("2023"));
    }

    //return value
    return (
    <div className="block block-year">
        <h3 className = "block-label">2022</h3>
        <SubBlock/>
        <button className="sub-block-create" onClick={createSubBlock}>+</button>
        <input placeholder="this is my input placeholder"></input>
        <button className="sub-block-create" onClick={addYearToStore}>Add Year To Store</button>
        <h3>List Items</h3>
        <p>{listItems}</p>
    </div>
    );
}

export default BlockYear;
