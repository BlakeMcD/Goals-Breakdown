import React, { useState } from 'react';
import SubBlock from './SubBlock';
import SubBlockCreate from './SubBlockCreate';

function BlockYear() {

    //states
    const [listItems, setListItems] = useState(["first item in array, second item in array"])

    //functions
    const createSubBlock = (event) => {
        console.log("button clicked")
        setListItems(listItems.concat(<p>This is an additional list item</p>))
    }

    //return value
    return (
    <div className="block block-year">
        <h3 className = "block-label">2022</h3>
        <SubBlock/>
        <button className="sub-block-create" onClick={createSubBlock}>+</button>
        <input placeholder="this is my input placeholder"></input>
        <h3>List Items</h3>
        <p>{listItems}</p>
    </div>
    );
}

export default BlockYear;
