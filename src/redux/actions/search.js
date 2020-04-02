import errorMassage from '../../components/UI/errorMassage'
import getSearch from '../../axios/getSearch'
import {
    SEARCH_REQUEST_LOADING,
    SEARCH_REQUEST_SUCCESS,
    SEARCH_REQUEST_ERROR,
    SEARCH_REQUEST_DELETE,
    SEARCH_REQUEST_TEXT
} from './actionTypes'

export function search(searchText, order, results) {
    return async dispatch => {
        try {
            dispatch(searchRequestLoading())
            dispatch(searchRequestText(searchText))
            await getSearch(searchText, order, results)
            .then(res => dispatch(searchRequestSuccess(res)))
        } catch (e) {
            dispatch(searchRequestError())  
            errorMassage()
        }
    }
}

export function searchRequestLoading() {
	return {
		type: SEARCH_REQUEST_LOADING
	}
}

export function searchRequestSuccess(searchResponse) {
	return {
		type: SEARCH_REQUEST_SUCCESS,
		searchResponse
	}
}

export function searchRequestError() {
	return {
		type: SEARCH_REQUEST_ERROR
	}
}

export function searchRequestDelete() {
	return {
		type: SEARCH_REQUEST_DELETE
	}
}

export function searchRequestText(text) {
	return {
		type: SEARCH_REQUEST_TEXT,
		text
	}
}

