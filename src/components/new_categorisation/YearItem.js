import React from 'react'
import { useDispatch } from 'react-redux';
import { addYearCategoryItem } from '../../actions/actionCreator';

function YearItem() {

    //DISPATCH
    const dispatch = useDispatch();

    //FUNCTIONS
    const addItemToCategory = () => {
        dispatch(addYearCategoryItem({category: "Finance"}));
    }

    //RETURN VALUE
    return (
    <button onClick={addItemToCategory}>YearCategoryItem: this button adds an item to the category</button>
    )

}

export default YearItem