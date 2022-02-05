import React from 'react';
import SubBlock from './SubBlock';
import SubBlockCreate from './SubBlockCreate';

function BlockYear() {

    //functions
    const createSubBlock = (event) => {
        console.log("button clicked")
        return <SubBlock/>
    }

    //return value
    return (
    <div className="block block-year">
        <h3 className = "block-label">2022</h3>
        <SubBlock/>
        <button className="sub-block-create" onClick={createSubBlock}>+</button>
    </div>
    );
}

export default BlockYear;
