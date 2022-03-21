import { bindActionCreators } from "redux"
import { addYearCategoryItem } from "../actions/actionCreator";

const yearReducer = (state = [], action) => {
    switch(action.type) {

    case 'ADD_YEAR': 
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
        return state.map(obj => {
             return {
                ...obj, 
                categories: obj.categories.map((catBlock) => {
                    if (catBlock.category === action.item.category) {
                        if (catBlock.items === undefined) {
                            return {...catBlock, category: action.item.category, items: [{text: "did this work", uuid: action.item.uuid}] }
                        }
                        return {...catBlock, category: action.item.category, items: [...catBlock.items, {text: "did this work", uuid: action.item.uuid}] }                    
                    }
                    return catBlock
                })
            }
        })

    case 'EDIT_YEAR_CATEGORY_ITEM':
        return state.map(obj => {
            // should map items, and replace the old one with the new one.
            return {
                ...obj, 
                categories: obj.categories.map((categoryBlock) => {
                    if (categoryBlock.category === action.item.category) {
                        return {
                            category: categoryBlock.category, 
                            items: categoryBlock.items.map((item) => {
                                if (item.uuid === action.item.uuid) {
                                    return {
                                        text: action.item.text, 
                                        uuid: action.item.uuid
                                    }
                                }
                                return item
                            })
                        }
                    }
                    return categoryBlock
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




