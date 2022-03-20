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
        return state.map(obj => {
             return {
                ...obj, 
                categories: obj.categories.map((catBlock) => {
                    console.log("action:", action);
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

            if (obj.categories.length !== 0) {
                let objectsWithItems = obj.categories.map(ob => {
                    if (ob.items.length !== 0) {
                        return ob
                    }})
                console.log("objectsWithItems")
                console.log(objectsWithItems)
                console.log("action.item.uuid TEST", action.item.uuid)
                if (objectsWithItems.length !== 0) {
                    let relevantCategory = objectsWithItems.find((ob) => ob.category === action.item.category);
                    // console.log("the relevant object has a uuid of:"+ob.items.uuid+"and the action.item.uuid is:"+action.item.uuid);
                    console.log("and the relevant category is: ", relevantCategory);

                    console.log("relevantCategory.items", relevantCategory.items)
                    console.log("relevantCategory.items[0]", relevantCategory.items[0].uuid)
                    console.log("action.item.uuid", action.item.uuid)
                    
                    
                    
                    let relevantItem = relevantCategory.items.find((item) => item.uuid === action.item.uuid);
                    console.log("and the relevant item is: ", relevantItem);


                    // let relevantItem = 
                    // itemsWithItems.find((ob) => ob.items.uuid === action.item.uuid)
                    // console.log("the relevant object has a uuid of:"+ob.items.uuid+"and the action.item.uuid is:"+action.item.uuid);
                }
                // return objectsWithItems
            }
            // let relevantObject = obj.find((ob) => ob.categories.items.uuid === action.item.uuid);
            // // console.log("the relevant object has a uuid of:"+ob.items.uuid+"and the action.item.uuid is:"+action.item.uuid);
            // console.log("relevant object is:"+relevantObject)
            // if (relevantObject !== undefined) {
            //     console.log("the relevant object has a uuid of:"+ob.categories.items.uuid+"and the action.item.uuid is:"+action.item.uuid);
            // }
            
            return {
                ...obj, 
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




