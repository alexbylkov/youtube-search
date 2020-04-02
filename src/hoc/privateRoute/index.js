import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
	{...rest}
	render={props =>
		rest.isAuth ? 
		<Component {...props} /> : 
		<Redirect
		to={{
		pathname: '/auth',
		state: { from: props.location },
		}} />
	} />
)

const mapStateToProps = state => {
	return {
		isAuth: !!state.auth.token
	}
}

export default connect(mapStateToProps)(PrivateRoute)