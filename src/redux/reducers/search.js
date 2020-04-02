import {
	SEARCH_REQUEST_LOADING,
	SEARCH_REQUEST_SUCCESS,
	SEARCH_REQUEST_ERROR,
	SEARCH_REQUEST_DELETE,
	SEARCH_REQUEST_TEXT
} from '../actions/actionTypes'

const initialState = {
	searchResponse: [],
	searchRequestText: '',
	loading: false
}


export default function searchReducer(state = initialState, action) {
	switch (action.type) {
		case SEARCH_REQUEST_LOADING:
		return {
			...state,
			loading: true
		}
		case SEARCH_REQUEST_SUCCESS:
		return {
			...state, 
			searchResponse: action.searchResponse,
			loading: false
		}
		case SEARCH_REQUEST_ERROR:
		return {
			...state,
			searchResponse: [],
			searchRequestText: '',
			loading: false
		}
		case SEARCH_REQUEST_DELETE:
		return {
		...state,
		searchResponse: [],
		searchRequestText: ''
		}
		case SEARCH_REQUEST_TEXT:
		return {
		...state,
		searchRequestText: action.text
		}
		default:
		return state
	}
}