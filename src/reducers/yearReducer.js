import { bindActionCreators } from "redux"

const yearReducer = (state = {}, action) => {
    switch(action.type) {

    case 'ADD_YEAR': 
        console.log("Item has been added");
        return {...state, year: action.item};

    case 'DELETE_ITEM':
        console.log("item deleted");
        // return {...state.filter(item => item.content !== action.item.content)}
        return state;

    default: 
        return state;
    }
}

export default yearReducer;