import { bindActionCreators } from "redux"

const yearReducer = (state =[], action) => {
    switch(action.type) {

    case 'ADD_ITEM': 
        console.log("Item has been added");
        return [...state, action.item];

    case 'DELETE_ITEM':
        console.log("item deleted");
        // return [...state.filter(item => item.content !== action.item.content)]
        return state;

    default: 
        return state;
    }
}

export default yearReducer;