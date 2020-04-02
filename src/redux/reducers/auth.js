import {
	AUTH_LOGOUT, 
	AUTH_SUCCESS, 
	AUTH_FAIL,
	AUTH_ERROR, 
	AUTH_LOADING
} from '../actions/actionTypes'

const initialState = {
	token: null,
	authFail: false, 
	loading: false
}


export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case AUTH_LOADING:
		return {
			...state, 
			loading: true
		}
		case AUTH_SUCCESS:
			return {
			...state, 
			token: action.token,
			authFail: false, 
			loading: false
		}
		case AUTH_LOGOUT:
		return {
			...state, 
			token: null
		}
		case AUTH_FAIL:
			return {
			...state, 
			token: null,
			authFail: true,
			loading: false
		}
		case AUTH_ERROR:
			return {
			...state, 
			token: null,
			authFail: false, 
			loading: false
		}
		default:
		return state
	}
}