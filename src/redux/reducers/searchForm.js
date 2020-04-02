import {
    SEARCH_FORM_CLOSE, 
    SEARCH_FORM_OPEN, 
    SEARCH_FORM_SUCCESS, 
    SEARCH_FORM_CANCEL,
	SEARCH_FORM_LOADING,
	SEARCH_FORM_ERROR
} from '../actions/actionTypes'

const initialState = {
	formVisible: false,
	formSuccess: false,
	loading: false
}

export default function searchReducer(state = initialState, action) {
	switch (action.type) {
		case SEARCH_FORM_CLOSE:
		return {
		...state, 
		formVisible: false,
		loading: false
		}
		case SEARCH_FORM_OPEN:
		return {
		...state, 
		formVisible: true
		}
		case SEARCH_FORM_LOADING:
		return {
			...state, 
			loading: true
		}
		case SEARCH_FORM_SUCCESS:
		return {
			...state, 
			loading: true,
			formSuccess: true
		}
		case SEARCH_FORM_CANCEL:
		return {
			...state, 
			formSuccess: false
		}
		case SEARCH_FORM_ERROR:
		return {
			formVisible: false,
			formSuccess: false,
			loading: false
		}
		default:
		return state
	}
}