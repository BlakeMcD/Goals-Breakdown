import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addYearCategoryItem, editYearCategoryItem, deleteYearCategoryItem } from '../../actions/actionCreator';

function YearItem(props) {

    //STATES
    const [itemText, setItemText] = useState("Click to add text");

    //DISPATCH
    const dispatch = useDispatch();

    //USEEFFECT
    useEffect(() => {
        console.log("Use Effect Fired");
        dispatch(editYearCategoryItem({category: props.categoryName, uuid: props.uuid, text: itemText}));
    }, [itemText])

    //FUNCTIONS

    const handleSubmit = (event) => {
        event.preventDefault();
        //send dispatch
        dispatch(editYearCategoryItem({category: props.categoryName, uuid: props.uuid, text: itemText}))
    };

    const handleChange = (event) => {
        setItemText(event.target.value);
    };

    const handleFocus = (event) => event.target.select();

    const handleDelete = () => {
        console.log("registered click")
        dispatch(deleteYearCategoryItem({category: props.categoryName, uuid: props.uuid}))
    }

    //RETURN VALUE
    return (
        <div>
            <p>YearItem belonging to {props.categoryName}</p>
            <p>With a UUID of: {props.uuid}</p>
            <form onSubmit={handleSubmit} className="itemTextInput">
                <input type="text" value={itemText} onFocus={handleFocus} onChange={handleChange}/>
            </form>
            <button onClick={handleDelete}>Delete this item with a UUID of: {props.uuid}</button>
        </div>
    )

}

export default YearItem