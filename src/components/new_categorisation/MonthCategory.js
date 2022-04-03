import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMonthCategoryItem } from '../../actions/actionCreator';
import { v4 as uuidv4 } from 'uuid';
import YearItem from './YearItem';

function MonthCategory(props) {

  //DISPATCH
  const dispatch = useDispatch();

  console.log("MonthCategoryProps:", props)

  //SELECTOR
  const categoryItemsArray = useSelector((state) => {
  const rightObject = state.years[0].months.find((month) => month.uuid === props.monthUuid);

    if (rightObject) {
      const rightCategory = rightObject.categories.find((catBlock) => catBlock.category === props.categoryName)
      if (rightCategory.items === undefined) {
          return []
      }
      return rightCategory.items
    }
    return []
  })

  //FUNCTIONS
  const addItemToCategory = () => {
    dispatch(addMonthCategoryItem({monthUuid: props.monthUuid, category: props.categoryName, uuid: uuidv4()}));
  }

  const renderCategoryItem = () => {
    let allItems = [];
    for (let i = 0; i < categoryItemsArray.length; i++) {
      allItems.push(
        <YearItem key={i} categoryName={props.categoryName} uuid={categoryItemsArray[i].uuid}/>
    )}
    return allItems
} 


  return (
    <div className="yearCategory">
          <p>This is a category block and its name is {props.categoryName} </p>
          <button onClick={() => addItemToCategory()}>Clicking this will add an item to {props.categoryName}</button>
            {renderCategoryItem()}
    </div>
  )
}

export default MonthCategory