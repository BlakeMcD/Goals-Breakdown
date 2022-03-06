//YEAR

export const addYear = (payload) => {
    return {
        type: "ADD_YEAR",  
        item: payload
    };
};

export const addYearCategory = (payload) => {
    return {
        type: "ADD_YEAR_CATEGORY", 
        item: payload
    };
};

export const addYearCategoryItem = (payload) => {
    return {
        type: "ADD_YEAR_CATEGORY_ITEM",
        item: payload
    }
}

export const deleteYear = (payload) => {
    return {
        type: "DELETE_YEAR",
        item: payload
    };
};

export const deleteYearCat = () => {
    return {
        type: "DELETE_YEAR_CAT"
    };
};

export const addYearCatItem = () => {
    return {
        type: "ADD_YEAR_CAT_ITEM"
    };
};

export const deleteYearCatItem = () => {
    return {
        type: "DELETE_YEAR_CAT_ITEM"
    };
};
