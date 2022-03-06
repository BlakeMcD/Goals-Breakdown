import { bindActionCreators } from "redux"

const yearReducer = (state = [], action) => {
    switch(action.type) {

    case 'ADD_YEAR': 
        console.log("Item has been added");
        return [...state, action.item];

    case 'ADD_YEAR_CATEGORY':
        return state.map(obj => {
            if (obj.year === "2022") {
                // return  {...obj, category: "Finance"};
                return  {...obj, categories: [action.item]};
            };
            return obj;
        })
    
    case 'ADD_YEAR_CATEGORY_ITEM':
        return state.map(obj => {
            if (obj.categories[0].category === "Finance") {
                return {...obj, categories: [{category: "Finance", items: ["this is an item"]}]}
            }
            return obj;
        })
    
    case 'ADD_MONTH':
        return state.map(obj => {
            if (obj.year === "2022") {
                // return  {...obj, category: "Finance"};
                return  {...obj, months: [{month: "January"}]};
            };
            return obj;
        })


    default: 
        return state;
    }
}

export default yearReducer;




