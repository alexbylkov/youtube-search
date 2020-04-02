import React from 'react'
import {Form, Input, Button} from 'antd'

const validateField = (touched, errors) => {
	if (touched) {
		if (errors) {
			return "error"
		} else {
			return "success"
		}
	} else {
		return ""
	}
}

const AuthForm = ({values, touched, errors, handleChange, handleBlur, handleSubmit, authLoading, authFail}) => (
	<Form
	onSubmit={handleSubmit} >
		<Form.Item
		validateStatus={validateField(touched.username, errors.username)}
		help={!touched.username ? null : errors.username}
		hasFeedback >
			<Input
			id="username"
			size="large"
			placeholder="Логин"
			value={values.username}
			onChange={handleChange}
			onBlur={handleBlur} />
		</Form.Item>
		<Form.Item
		validateStatus={validateField(touched.password, errors.password)}
		help={!touched.password ? null : errors.password}
		hasFeedback >
			<Input.Password 
			id="password"
			size="large"
			type="password"
			placeholder="Пароль"
			value={values.password}
			onChange={handleChange}
			onBlur={handleBlur} />
		</Form.Item>
		<Form.Item>
			{authFail && !touched.password && !touched.username && !authLoading ? 
			<div style={{color: "red"}}>Неверный логин или пароль</div> : null}
			<Button
			loading={authLoading}  
			onClick={handleSubmit}
			type="primary"
			size="large" >
			Войти
			</Button>
		</Form.Item>
	</Form>
)

export default AuthForm


