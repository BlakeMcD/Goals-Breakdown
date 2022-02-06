import { bindActionCreators } from "redux"

yearReducer = (state =[], action) => {
    switch(action.type) {

    case 'ADD_ITEM': 
        console.log("Item has been added");
        return [...state, action.item]

    case 'DELETE_ITEM':
        console.log("item deleted");
        return [...state.filter(item => item.content !== action.item.content)]

    default: 
        return state
    }
}