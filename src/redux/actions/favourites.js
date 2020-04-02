import axios from 'axios'
import errorMassage from '../../components/UI/errorMassage'
import {
	FAVOURITES_LIST, 
	FAVOURITES_LOADING,
	FAVOURITES_ERROR
} from './actionTypes'

export function favourites() {
    return async (dispatch, getState) => {
		try {
			dispatch(favouritesLoading())
			const url = 'https://search-245a8.firebaseio.com/saveRequest.json'
			const user = getState().auth.token
			const response = await axios.get(url)
			const favourites = []
	
			Object.keys(response.data).forEach(key => favourites.push({ ...response.data[key], id: key }))

			const list = favourites.filter(item => item.userName === user)
			dispatch(favouritesList(list.reverse()))
		} catch (e) {
			dispatch(favouritesError())  
			errorMassage()
		}
    }
}

export function favouritesList(list) {
    return {
		type: FAVOURITES_LIST,
		list
    }
}

export function favouritesLoading() {
    return {
	  	type: FAVOURITES_LOADING
	}
}
export function favouritesError() {
    return {
      	type: FAVOURITES_ERROR
    }
}

export function postDeleteSearch(id) {
    return async dispatch => {
		try {
			dispatch(favouritesLoading())
			const url = `https://search-245a8.firebaseio.com/saveRequest/${id}.json`
			await axios.delete(url)
			await dispatch(favourites())
        } catch (e) {
            dispatch(favouritesError())  
            errorMassage()
        }
    }
}