import { bindActionCreators } from "redux"
import { addYearCategoryItem } from "../actions/actionCreator";

const yearReducer = (state = [], action) => {
    switch(action.type) {

    case 'ADD_YEAR': 
        console.log("Item has been added");
        return [...state, action.item];

    case 'ADD_YEAR_CATEGORY':
        return state.map(obj => {
            if (obj.year === "2022") {
                //check if category already exists
                if (obj.categories.find((catBlock) => catBlock.category === action.item.category)) {
                    return obj
                }
                return  {...obj, categories: [...obj.categories, action.item]};
               
            };
            return obj;
        })
    
    case 'ADD_YEAR_CATEGORY_ITEM':
        console.log("ACTION")
        console.log(action)
        
        return state.map(obj => {
            console.log("OBJ")
            console.log(obj)

             //attempt 9

             console.log("action")
             console.log(action)

             return {
                ...obj, 
                categories: obj.categories.map((catBlock) => {
                    if (catBlock.category === action.item.category) {
                        if (catBlock.items === undefined) {
                            return {...catBlock, category: action.item.category, items: ["did this work"] }
                        }
                        return {...catBlock, category: action.item.category, items: [...catBlock.items, "did this work"] }                    
                    }
                    return catBlock
                })
            }
        })
    
    case 'ADD_MONTH':
        return state.map(obj => {
            if (obj.year === "2022") {
                // return  {...obj, category: "Finance"};
                return  {...obj, months: [action.item]};
            };
            return obj;
        })


    default: 
        return state;
    }
}

export default yearReducer;




