import axios from 'axios';
import {ACCOUNT_LOGIN, GOOGLE_LOGIN, LOGOUT, LOGIN_LOADING} from "../actions/types";
const jwtDecode = require('jwt-decode');

export const googleLogin = () => dispatch => {	
    let token = localStorage.getItem('token')
    let user = jwtDecode(token)
    dispatch({
        type: GOOGLE_LOGIN,
        payload: user
    })
}

export const login = (user) => dispatch => {
    axios
        .post("http://localhost:5000/user/login", user)
        .then(res => {
            let token = res.data.token
            localStorage.setItem('token',`${token}`)
            let decodedUser = jwtDecode(token)
                dispatch({
                    type: ACCOUNT_LOGIN,
                    payload: decodedUser
                })
        }).catch(err => { console.log(err) })
}

export const logout = () => dispatch => {
    localStorage.removeItem('token')
    let user = {}
    
    dispatch({
        type: LOGOUT,
        payload: user
    })
}

export const setLoading = () => {
	return {
		type: LOGIN_LOADING
	}
}