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
        dispatch(addYearCategoryItem({category: props.categoryName, uuid: uuidv4()}));
    }

    const renderCategoryItem = () => {
        let allItems = [];
        for (let i = 0; i < categoryItemsArray.length; i++) {
          allItems.push(
            <YearItem key={i} categoryName={props.categoryName} uuid={categoryItemsArray[i].uuid}/>
        )}
        return allItems
    } 

    //RETURN
    return (
      <div className="yearCategory">

          <p>This is a category block and its name is {props.categoryName} </p>
          <button onClick={() => addItemToCategory()}>Clicking this will add an item to {props.categoryName}</button>
            {renderCategoryItem()}
      </div>
    )
}

export default YearCategory