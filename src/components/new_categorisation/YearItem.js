import React from 'react'
import { useDispatch } from 'react-redux';
import { addYearCategoryItem } from '../../actions/actionCreator';

function YearItem(props) {

    //DISPATCH
    const dispatch = useDispatch();

    //FUNCTIONS
    const addItemToCategory = () => {
        dispatch(addYearCategoryItem({category: "Finance"}));
    }

    //RETURN VALUE
    return (
        <div>
            <button onClick={addItemToCategory}>YearCategoryItem: this button adds an item to the category</button>
        </div>
    )

}

export default YearItem