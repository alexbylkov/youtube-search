import React from 'react'
import {Formik} from 'formik'
import {connect} from 'react-redux'
import {auth} from '../../redux/actions/auth'
import AuthForm from '../components/authForm'

const LoginFormContainer = ({authFail, auth, authLoading}) => (
	<Formik
	initialValues={{ 
		username: '',
		password: ''
	}}
	onSubmit={(values, {setSubmitting, resetForm}) => {
		const {username, password} = values
		setSubmitting(true)
		auth(username, password)
		resetForm()
	}} 
	validate={values => {
		let errors = {}

		if (!values.username) {
			errors.username = "Введите логин"
		} else if (!/^[а-яА-ЯёЁa-zA-Z0-9]+$/i.test(values.username)) {   
			errors.username = "Логин может содержать только буквы и цифры"
		}
		if (!values.password) {
			errors.password = "Введите пароль"
		} else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)) {
			errors.password = "Пароль должен сожержать латинские буквы, цифры и быть длиннее 7 символов"
		} 
		return errors
	}} >
		{props => (
			<AuthForm
			values={props.values}
			touched={props.touched}
			errors={props.errors}
			handleChange={props.handleChange}
			handleBlur={props.handleBlur}
			handleSubmit={props.handleSubmit}
			isSubmitting={props.isSubmitting}
			authFail={authFail}
			authLoading={authLoading} />
		)}
	</Formik>
)

const mapStateToProps = state => {
	return {
		authFail: state.auth.authFail,
		authLoading: state.auth.loading
	}
}

export default connect(mapStateToProps, {auth})(LoginFormContainer)
