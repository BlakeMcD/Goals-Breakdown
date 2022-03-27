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

                //WHAT DO I WANT THIS CODE BLOCK TO DO? 
                //if no months exist, I want to add month object with all the relevant info it may need: uuid, month(name), categories[with category name], weeks[]
                //if a month already exists, I want to find the month that was specified. When I find this month, I want to search its categories to check that the category doesn't already exist. If it does exists, I won't make any changes. But if it does NOT exist, I want to add a category to the month's category array. 

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
                };

                //month with that uuid doesn't exist
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


                
                
                return {...obj, 
                    months: obj.months.map((monthObj) => {
                        if (monthObj.uuid === action.item.uuid) {  //there is already a month with this uuid - you can't add a category if the month doesn't exist

                            //find the category with this uuid
                            const categoryFound = monthObj.categories.find(monthCat => monthCat.category === action.item.category);
                            //assuming it cannot find a category with this name, add the category

                            //so...what's going on? We have found the right month, and also checked that it doesn't have a category already existing with this name.
                            //what that means is that we should a) return this month object b) return all of its current categories c) and add on another category, which we got from the payload. 

                            if (categoryFound === undefined) {  //none of the categories have this name - i.e. a NEW category is being added
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




