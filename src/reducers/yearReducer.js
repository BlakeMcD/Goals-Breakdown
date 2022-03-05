import { bindActionCreators } from "redux"

const yearReducer = (state = [], action) => {
    switch(action.type) {

    case 'ADD_YEAR': 
        console.log("Item has been added");
        return [...state, action.item];

    // case 'ADD_YEAR_CATEGORY':
    //     // state.map(obj => {
    //     //     if (obj.year === "2022") {
    //     //         obj = {...obj, category: ["Finance"]};
    //     //         // return obj
    //     //     }
    //     //     // return [...state, obj]
    //     // })
    //     return state;

    default: 
        return state;
    }
}

export default yearReducer;




