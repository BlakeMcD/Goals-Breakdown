import { bindActionCreators } from "redux"

const yearReducer = (state = [], action) => {
    switch(action.type) {

    case 'ADD_YEAR': 
        console.log("Item has been added");
        return [...state, action.item]

    case 'DELETE_ITEM':
        console.log("item deleted");
        // return {...state.filter(item => item.content !== action.item.content)}
        return state;

    case 'ADD_YEAR_CAT':
        return [...state, action.item]

    default: 
        return state;
    }
}

//pass the whole thing in to add a whole new object
// action.item = {year: "2021", cat: "shoes"}

export default yearReducer;




