import React from 'react'
import AuthForm from '../../../form/containers/authForm'
import logo from '../../../assets/logo.png'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import './authorizationPage.sass'

const AuthorizationPage = ({location, isAuth}) => {
    const {from} = location.state || {from: {pathname: '/'}}
    if (isAuth) {
        return <Redirect to={from}/>
    } else {
        return (
            <div className="authorization">
                <img src={logo} alt="logo"/>
                <h1>Вход</h1>
                <AuthForm/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      isAuth: !!state.auth.token
    }
}
  
export default connect(mapStateToProps)(AuthorizationPage)