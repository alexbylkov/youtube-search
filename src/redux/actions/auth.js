import axios from 'axios'
import errorMassage from '../../components/UI/errorMassage'
import {
	AUTH_LOGOUT, 
	AUTH_SUCCESS, 
	AUTH_FAIL, 
	AUTH_LOADING, 
	AUTH_ERROR
} from './actionTypes'

export function auth(login, password) {
    return async dispatch => {
		try {
			dispatch(authLoading())
			const url = 'https://search-245a8.firebaseio.com/users.json'
			const defaultPassword = '12345qwe'
	
			if (password !== defaultPassword) {
				dispatch(authFail())
			} else {
				const response = await axios.get(url)
				const username= response.data.filter(user => user === login)
				if (username.length === 0) dispatch(authFail())
				else dispatch(authSuccess(login))
			}
        } catch (e) {
            dispatch(authError())  
            errorMassage()
        }
    }   
}

export function authFail() {
	return {
		type: AUTH_FAIL
	}
}

export function authError() {
	return {
		type: AUTH_ERROR
	}
}

export function authLoading() {
	return {
		type: AUTH_LOADING
	}
}

export function authSuccess(token) {
    localStorage.setItem('token', token)
    return {
		type: AUTH_SUCCESS,
		token
    }
}

export function logout() {
  	localStorage.removeItem('token')
  	return {
		type: AUTH_LOGOUT
	}
}

export function autoLogin() {
    return dispatch => {
		const token = localStorage.getItem('token')
		if (!token) dispatch(logout())
		else dispatch(authSuccess(token))
    }
}
