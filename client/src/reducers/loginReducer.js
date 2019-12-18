import { ACCOUNT_LOGIN, LOGOUT, LOGIN_LOADING } from "../actions/types"

const initialState = {
	  user: null,
    loading: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case ACCOUNT_LOGIN:
			return {
				...state,
				user: action.payload,
				loading: false
			}
		
		case LOGOUT:
			return {
				...state,
				user: action.payload,
				loading: false
			}

		case LOGIN_LOADING:
			return {
				...state,
				loading: true
			}

		default:
			return {
				...state
			}
	}
}