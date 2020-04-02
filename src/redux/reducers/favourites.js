import {
	FAVOURITES_LIST, 
	FAVOURITES_LOADING,
	FAVOURITES_ERROR
} from '../actions/actionTypes';

const initialState = {
	list: [],
	loading: false
}


export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case FAVOURITES_LIST:
		return {
			...state, 
			list: action.list,
			loading: false
		}
		case FAVOURITES_LOADING:
		return {
			...state, 
			loading: true
		}
		case FAVOURITES_ERROR:
		return {
			...state, 
			loading: false
		}
		default:
		return state
	}
}