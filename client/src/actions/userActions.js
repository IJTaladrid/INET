import axios from "axios";
import { POST_USER, USER_LOADING } from "./types";

export const postUser = (newUser) => dispatch => {
	dispatch(setLoading())
	console.log('add user action');
		
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	axios.post("http://localhost:5000/api/users", newUser, config)
		.then(res =>  
			dispatch({
				type: POST_USER,
				payload: res.data
			})
		)
		.catch(err => { console.log(err) })
}

export const setLoading = () => {
	return {
		type: USER_LOADING
	}
}