import { combineReducers } from "redux";
import yearReducer from "./yearReducer";

const rootReducer = combineReducers({
    year: yearReducer
});

export default rootReducer