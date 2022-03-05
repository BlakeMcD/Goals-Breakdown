import React, { useState } from 'react';
import SubBlock from './SubBlock';
import { useSelector, useDispatch } from 'react-redux';
import { addYear, addYearCat, deleteYear } from '../actions/actionCreator';
import BlockCategory from './BlockCategory';
import DeleteComponentButton from './DeleteComponentButton';


function BlockYear(props) {

    //VARIABLES

    //STATES
    // const dispatch = useDispatch();
    const [categories, setCategories] = useState([]);
    const [text, setText] = useState(props.name.toString())

    //FUNCTIONS
    const addBlockCategory = () => {
        setCategories([...categories, "category"]);
    }

    const deleteChildComponent = (idValue) => {
        // setCategories(
        //   categories.filter(category => category.id !== id)
        // );
        console.log("deleteChildComponent code ran");
        console.log(`The idValue is ${idValue}`);
    };

    const removeCategory = (iValue) => {
      console.log(`the value of i is: ${iValue}`)
      
      let origArray = categories;
      let preValuesArray = categories.slice(0,iValue-1)
      let postValuesArray = categories.slice(iValue+1)
      const joinedList = preValuesArray.concat(postValuesArray)

      setCategories(joinedList);
      console.log("removeCategory code running")
    }

    const returnCategories = () => {
        let allCategories = [];
        for (let i = 0; i < categories.length; i++) {
        allCategories.push(
          <div key={i}>
            {/* <DeleteComponentButton key={`${i}DeleteButton`} idValue={i} deleteComponent={deleteChildComponent}/> */}
            <button onClick={() => removeCategory(i)}>Delete Category</button>
            <BlockCategory key={`${i}BlockCategory`} className="sub-block-create" blockGroup={props.blockGroup}>This is a Category </BlockCategory>
          </div>
          )
        } 
        return allCategories;
    }

      
    //DISPATCHES
    // const addYearToStore = () => {
    //     dispatch(addYear("2023"));
    // }

    // const addYearCatToStore = () => {
    //     dispatch(addYearCat("Finance"));
    // }

    //return value
    return (
    <div className="block block-year">
        <h3 className = "block-label">{text}</h3>
        {returnCategories()}
        <button onClick={addBlockCategory}>Add A Category</button>
    </div>
    );
}

export default BlockYear;
