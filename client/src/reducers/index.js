import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";

const allReducers = combineReducers ({
    city: cityReducer,
    itinerary: itineraryReducer
});

export default allReducers;