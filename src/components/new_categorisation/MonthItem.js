import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { editMonthCategoryItem, deleteYearCategoryItem } from '../../actions/actionCreator';

function MonthItem(props) {

    console.log("MONTHITEM PROPS:", props)

    //STATES
    const [itemText, setItemText] = useState("Click to add text");

    //DISPATCH
    const dispatch = useDispatch();

    //USEEFFECT
    useEffect(() => {
        dispatch(editMonthCategoryItem({category: props.categoryName, month: props.month, uuid: props.uuid, text: itemText}));
    }, [itemText])

    //FUNCTIONS

    const handleSubmit = (event) => {
        event.preventDefault();
        //send dispatch
        dispatch(editMonthCategoryItem({category: props.categoryName, month: props.month, uuid: props.uuid, text: itemText}))
    };

    const handleChange = (event) => {
        setItemText(event.target.value);
    };

    const handleFocus = (event) => event.target.select();

    const handleDelete = () => {
        dispatch(deleteYearCategoryItem({category: props.categoryName, uuid: props.uuid}))
    }

    //RETURN VALUE
    return (
        <div>
            <p>MonthItem belonging to {props.categoryName}</p>
            <p>With a UUID of: {props.uuid}</p>
            <form onSubmit={handleSubmit} className="itemTextInput">
                <input type="text" value={itemText} onFocus={handleFocus} onChange={handleChange}/>
            </form>
            <button onClick={handleDelete}>Delete this item with a UUID of: {props.uuid}</button>
        </div>
    )

}

export default MonthItem