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

    case 'EDIT_YEAR_NAME':
        return state.map(obj => {
            return {
                
                year: action.item.year
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
    
    case 'DELETE_YEAR_CATEGORY_ITEM':
        return state.map(obj => {
            return {
                ...obj, 
                categories: obj.categories.map((categoryBlock) => {
                    if (categoryBlock.category === action.item.category) {
                        return {
                            category: categoryBlock.category, 
                            items: categoryBlock.items.filter((item) => {
                                return item.uuid !== action.item.uuid 
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

    case 'ADD_MONTH_CATEGORY':
        return state.map(obj => {
            if (obj.year === "2022") {

                if (obj.months.length === 0) {  //this is the first entry to be added to months
                    return {
                        ...obj, 
                        months: [
                            {
                                uuid: action.item.uuid,
                                month: action.item.month, 
                                categories: [
                                    {
                                        category: action.item.category,
                                        items: []
                                    }
                                ],
                                weeks: []
                            }
                        ] 
                    }
                }
                
                return {...obj, 
                    months: obj.months.map((monthObj) => {
                        if (monthObj.month === action.item.month) {  //there is already a month with this name - you can't add a category if the month doesn't exist

                            //find the category with this name
                            const categoryFound = monthObj.categories.find(monthCat => monthCat.category === action.item.category);
                            //assuming it cannot find a category with this name, add the category

                            if (categoryFound === undefined) {  //none of the categories have this name - i.e. a NEW category is being added
                                return ({
                                    uuid: action.item.uuid,
                                    month: action.item.month, 
                                    categories: [...monthObj.categories, 
                                    {
                                        category: action.item.category,
                                        items: []
                                    }], 
                                    weeks: []
                                })
                            }
                        } 
                        return monthObj                 
                    })
                }              
            };
            return obj;
        })

    case 'EDIT_MONTH_NAME': 
    return state.map(obj => {
        if (obj.year === "2022") {
            // return  {...obj, category: "Finance"};
            return  {...obj, 
                months: obj.months.map((monthObj) => {
                    if (monthObj.uuid === action.item.uuid) { //this is the month we want to edit
                        return({
                            uuid: monthObj.uuid, 
                            month: action.item.month, 
                            categories: monthObj.categories,
                            weeks: monthObj.weeks
                        })                      
                    }
                    return monthObj
                })
            };
        };
        return obj;
    })

    default: 
        return state;
    }


}

export default yearReducer;




