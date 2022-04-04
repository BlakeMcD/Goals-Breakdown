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
                 //there are no objects in the obj.months array
                if (obj.months.length === 0) { 
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
                };

                //a month with that uuid doesn't exist
                const monthExists = obj.months.find((month) => month.uuid === action.item.uuid);

                if (monthExists === undefined) {
                    return {
                        ...obj, 
                        months: [...obj.months, 
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

                return {
                    ...obj, 
                    months: obj.months.map((monthObj) => {

                        console.log("monthObj.uuid:", monthObj.uuid)
                        console.log("action.item.uuid:", action.item.uuid)

                        if (monthObj.uuid === action.item.uuid) {  //we have found the month we're referring to

                            console.log("line 134")

                            const categoryFound = monthObj.categories.find(monthCat => monthCat.category === action.item.category);

                            if (categoryFound === undefined) {  //if it cannot find that this category exists in the categories array, add the category
                                console.log("line 139")
                                return (
                                    {   
                                        uuid: monthObj.uuid,
                                        month: monthObj.month,
                                        categories: [...monthObj.categories, 
                                                {
                                                    category: action.item.category,
                                                    items: []
                                                }
                                        ],
                                        weeks: monthObj.weeks                          
                                    }
                                )
                            }
                            return monthObj
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
    
    case 'ADD_MONTH_CATEGORY_ITEM':      
        return state.map(obj => {
             return {
                ...obj, 
                months: obj.months.map((monthBlock) => {
                   
                    if (monthBlock.uuid === action.item.monthUuid) {
                    console.log("monthBlock.uuid:", monthBlock.uuid)
                    console.log("action.item.monthUuid:", action.item.monthUuid);
                        
                        return {
                            uuid: monthBlock.uuid, 
                            month: monthBlock.month,
                            categories: monthBlock.categories.map((catBlock) => {
                                console.log("catBlock.category:", catBlock.category)
                                    console.log("action.item.category:", action.item.category)

                                if (catBlock.category === action.item.category) {   


                                    console.log("catBlock.category:", catBlock.category)
                                    console.log("action.item.category:", action.item.category)
                                    if (catBlock.items === undefined) {
                                        return {...catBlock, category: action.item.category, items: [{text: "did this work", uuid: action.item.uuid}] }
                                    }
                                    return {...catBlock, category: action.item.category, items: [...catBlock.items, {text: "did this work", uuid: action.item.uuid}] }                    
                                }
                                return catBlock
                            }),
                            weeks: monthBlock.weeks
                        }
                    }

                    return monthBlock
                })

                
            }
        })

    default: 
        return state;
    }
}

export default yearReducer;




