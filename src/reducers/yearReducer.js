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

            //attempt 7
                //step 1 - return object with that category removed
            if (obj.year == "2022") {
                const filteredObject = obj.categories.filter((category) => 
                    category.name !== action.item.category
                )
                console.log("FILTERED OBJECT")
                console.log(filteredObject)
                return filteredObject
            }

            //attempt 6
            // if (obj.year === "2022") {
            //     //find the particular category block I need to find
            //     for (let i = 0; i < obj.categories.length; i ++) {
            //         if (obj.categories[i].category === action.item.category) {  //we have found this category in the array

            //             const newCategoryObject = {
     

            //                 category: obj.categories[i].category,
            //                 items: ["this is an item"]
            //             }

            //             console.log("newCategoryObject")
            //             console.log(newCategoryObject)

            //             const slicedArray = obj.categories.filter((catBlock) => catBlock.category !== obj.categories[i].category)

                        
            //             console.log("SLICED ARRAY")
            //             console.log(slicedArray)
            //             const newCategories = [...obj.categories, newCategoryObject]

            //             const mergeOldAndNew = slicedArray.push(newCategoryObject)
            //             console.log("mergeOldAndNew")
            //             console.log(mergeOldAndNew)

            //             return {
            //                 ...obj, 
            //                 categories: [mergeOldAndNew]
            //             }
            //         }

                    //REFERENCES
                    // return {...obj, categories: [{category: action.item.category, items: [ "this is an item"]}]}

                    // if (obj.year === 2023) {
                    //     obj = {...obj, cat: [...obj.cat, ...action]} //update
                    // }
                       
                        // return {...obj, categories: [...obj.categories, {category: obj.categories[i].category, items: ["this is an item"]}]}

                        // obj.categories[i] = {
                        //     category: obj.categories[i].category,
                        //     items: ["this is an item"]
                        // }
                        // console.log(`We found the category ${action.item.category}`)
            //     }
            // // }
            // return obj


            // attempt 5
            // for (let i = 0; i < obj.categories.length; i ++) {
            //     if (obj.categories[i].category === action.item.category) {  //we have found this category in the state

            //         let thisCategory = obj.categories[i]
            //         console.log("THIS CATEGORY")
            //         console.log(obj.categories[i])
            //         return {...obj, categories[i].items: ["This is an item"] }

            //         return {...obj, categories: [{category: action.item.category, items: [ "this is an item"]}]}   

            //         // if (obj.categories[i].items === undefined) { //this category block doesn't have any items
            //         //     return {...obj, categories: [...obj.categories, ...obj.categories[i], items: ["this is an item"]] }
            //         //     // return {...obj, categories: [ {category: action.item.category, items: [...obj.categories[i].items, "this is an item"]}]}
            //         // } 
            //         // //no item exists in this category

            //         // return {...obj, categories: [ {category: action.item.category, items: [ "this is an item"]}]}     
            //     } 
            // }

            //attempt 4

            // if (obj.year === "2022") {
            //     //find category
            //     if (obj.categories.find((catBlock) => catBlock.category === action.item.category)) {
            //         //find item
            //         if (catBlock.items.find((itemEntry) => itemEntry === action.item.category)) {
            //             //find item
                        
            //         }
            //     }
            //    return obj
            // };
            // return obj;

            //attempt 3 - if category/object already exists, add to it otherwise create it
            // for (let i = 0; i < obj.categories.length; i ++) {
            //     if (obj.categories[i].category === action.item.category) {  //we have found this category in the state
            //         if (obj.categories[i].items !== undefined) { //an item already exists in this category
            //             return {...obj, categories: [ {category: action.item.category, items: [...obj.categories[i].items, "this is an item"]}]}
            //         } 
            //         //no item exists in this category

            //         return {...obj, categories: [ {category: action.item.category, items: [ "this is an item"]}]}     
            //     } 
            // }

            //attempt 2 - iterate through object
            // for (let i = 0; i < obj.categories.length; i ++) {
            //     if (obj.categories[i].category === action.item.category) {
            //         if (obj.categories[i].items !== undefined) {
            //             return {...obj, categories: [ {category: action.item.category, items: [...obj.categories[i].items, "this is an item"]}]}
            //         } 
            //     //it is undefined
            //     return {...obj, categories: [...obj.categories, {category: action.item.category, items: [ "this is an item"]}]}     
            //     } 
            // }
            
            // if (obj.categories[0].category === action.item.category) {
            //     if (obj.categories[0].items !== undefined) {
            //         return {...obj, categories: [{category: action.item.category, items: [...obj.categories[0].items, "this is an item"]}]}
            //     } 
            //     //it is undefined
            //     return {...obj, categories: [{category: action.item.category, items: [ "this is an item"]}]}     
            // }
            return obj;
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




