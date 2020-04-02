import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from '../../hoc/privateRoute'
import SearchPage from '../pages/searchPage'
import FavouritesPage from '../pages/favouritesPage'
import AuthorizationPage from '../pages/authorizationPage'
import Page404 from '../pages/page404'
import {autoLogin} from '../../redux/actions/auth'

const App = ({autoLogin}) => {
	autoLogin()
	return (
		<Switch>
			<PrivateRoute path="/" exact component={SearchPage} />
			<PrivateRoute path="/liked" component={FavouritesPage} />
			<Route path="/auth" component={AuthorizationPage} />
			<Route component={Page404} />
		</Switch>
	)
}
export default connect(null, {autoLogin})(App)




