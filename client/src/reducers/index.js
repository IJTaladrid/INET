import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import userReducer from "./userReducer";

const allReducers = combineReducers ({
    city: cityReducer,
    itinerary: itineraryReducer,
    user: userReducer
});

export default allReducers;