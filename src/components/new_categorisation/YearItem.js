import React from 'react'
import { useDispatch } from 'react-redux';
import { addYearCategoryItem } from '../../actions/actionCreator';

function YearItem(props) {

    //DISPATCH
    const dispatch = useDispatch();

    //FUNCTIONS
    const addItemToCategory = () => {
        dispatch(addYearCategoryItem({category: props.categoryName}));
    }

    //RETURN VALUE
    return (
        <div>
            <p>YearItem belonging to {props.categoryName}</p>
            {/* <button onClick={addItemToCategory}>YearCategoryItem: this button adds an item to the category and its categoryName is {props.categoryName}</button> */}
        </div>
    )

}

export default YearItem