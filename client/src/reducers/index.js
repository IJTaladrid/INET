import { combineReducers } from "redux";
import cityReducer from "./cityReducer";

const allReducers = combineReducers ({
    city: cityReducer
});

export default allReducers;