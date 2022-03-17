import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addYearCategory } from './../../actions/actionCreator';
import { addYearCategoryItem } from '../../actions/actionCreator';
import CategoryIcon from './CategoryIcon';
import YearItem from './YearItem';
import { v4 as uuidv4 } from 'uuid';

function YearCategory(props) {

    //DISPATCH
    const dispatch = useDispatch();

    //SELECTOR
    const categoryItemsArray = useSelector((state) => {
        const rightObject = state.years[0].categories.find((catBlock) => catBlock.category === props.categoryName)
        if (rightObject.items === undefined) {
            return []
        }
        return rightObject.items
    })

    //FUNCTIONS
    const addItemToCategory = () => {
        console.log("addItemToCategory is running")
        dispatch(addYearCategoryItem({category: props.categoryName, uuid: uuidv4()}));
    }

    const renderCategoryItem = () => {
        console.log("renderCategoryItem ran") 
        let allItems = [];
        console.log("categoryItemsArray:", categoryItemsArray);
        for (let i = 0; i < categoryItemsArray.length; i++) {
          allItems.push(
            // <YearCategory key={i} categoryName={categoriesArray[i].category}></YearCategory>
            <YearItem key={i} categoryName={props.categoryName} uuid={categoryItemsArray[i].uuid}/>
        )}
        console.log("allItems:", allItems)
        return allItems
    } 

    //RETURN
    return (
      <div className="yearCategory">

          <p>This is a category block and its name is {props.categoryName} </p>
          <button onClick={() => addItemToCategory()}>Clicking this will add an item to {props.categoryName}</button>
          {/* <YearItem categoryName={props.categoryName}></YearItem> */}
            {renderCategoryItem()}
      </div>
    )
}

export default YearCategory