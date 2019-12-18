import { POST_USER, USER_LOADING } from "../actions/types";

const initialState = {
  user: "",
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case POST_USER:
      return  {
        ...state,
        users: action.payload,
        loading: true
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}