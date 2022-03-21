import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addYearCategoryItem, editYearCategoryItem } from '../../actions/actionCreator';

function YearItem(props) {

    //STATES
    const [itemText, setItemText] = useState("Click to add text");

    //DISPATCH
    const dispatch = useDispatch();

    //FUNCTIONS
    const addItemToCategory = () => {
        dispatch(addYearCategoryItem({category: props.categoryName}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //send dispatch
        dispatch(editYearCategoryItem({category: props.categoryName, uuid: props.uuid, text: itemText}))
    };

    const handleChange = (event) => {
        setItemText(event.target.value);
    };

    const handleFocus = (event) => event.target.select();

    //RETURN VALUE
    return (
        <div>
            <p>YearItem belonging to {props.categoryName}</p>
            <p>With a UUID of: {props.uuid}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={itemText} onFocus={handleFocus} onChange={handleChange}/>
            </form>
        </div>
    )

}

export default YearItem