import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addYearCategoryItem } from '../../actions/actionCreator';

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
    };

    const handleChange = (event) => {
        setItemText(event.target.value);
    };

    //RETURN VALUE
    return (
        <div>
            <p>YearItem belonging to {props.categoryName}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" value={itemText} onChange={handleChange}/>
            </form>
        </div>
    )

}

export default YearItem