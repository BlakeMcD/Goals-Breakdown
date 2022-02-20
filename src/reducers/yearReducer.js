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

//adding a new key-value pair
action = "something"

state.map(obj => {
    if (obj.year === 2023) {
        obj = {...obj, cat: action} //add or update
    }
    return obj
})

//adding a new array
action = [mon, tues]

state.map(obj => {
    if (obj.year === 2023) {
        obj = {...obj, cat: action} //add
    }
    return obj
})

//updating an array
action = [mon, tues]

state.map(obj => {
    if (obj.year === 2023) {
        obj = {...obj, cat: [...obj.cat, ...action]} //update
    }
    return obj
})

// to add object (multiple key/value pairs)
action = {cat: dfkj, asdjh: skdfh}

state.map(obj => {
    if (obj.year === 2023) {
        obj = {...obj, ...action} //add or update
    }
    return obj
})