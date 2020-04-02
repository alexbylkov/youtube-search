import axios from 'axios'
import errorMassage from '../../components/UI/errorMassage'
import {
    SEARCH_FORM_CLOSE, 
    SEARCH_FORM_OPEN, 
    SEARCH_FORM_SUCCESS, 
    SEARCH_FORM_CANCEL,
	SEARCH_FORM_LOADING,
	SEARCH_FORM_ERROR
} from './actionTypes'
import {favourites} from './favourites'

export function postSavedSearch(searchRequestSaved) {
    return async dispatch => {
		try {
			dispatch(searchFormLoading())
			const url = 'https://search-245a8.firebaseio.com/saveRequest.json'
			const userName = localStorage.getItem('token')
	
			await axios.post(url, {...searchRequestSaved, userName})
			await dispatch(searchFormSuccess())
			setTimeout(() => {dispatch(searchFormCancel())}, 3000)
			return dispatch(searchFormClose())
        } catch (e) {
            dispatch(searchFormError())  
            errorMassage()
        }
    }
}

export function searchFormClose() {
	return {
		type: SEARCH_FORM_CLOSE
	}
}
export function searchFormOpen() {
	return {
		type: SEARCH_FORM_OPEN
	}
}

export function searchFormSuccess() {
	return {
		type: SEARCH_FORM_SUCCESS
	}
}
export function searchFormCancel() {
	return {
		type: SEARCH_FORM_CANCEL
	}
}

export function searchFormLoading() {
	return {
		type: SEARCH_FORM_LOADING
	}
}

export function searchFormError() {
	return {
		type: SEARCH_FORM_ERROR
	}
}

export function postChangeSearch({ id, ...searchRequest}) {
	return async dispatch => {
		try {
			dispatch(searchFormLoading())
			const url = `https://search-245a8.firebaseio.com/saveRequest/${id}.json`
			await axios.patch(url, searchRequest)
			await dispatch(favourites())
			await dispatch(searchFormClose())
		} catch (e) {
			dispatch(searchFormError())  
			errorMassage()
		}
	}
}