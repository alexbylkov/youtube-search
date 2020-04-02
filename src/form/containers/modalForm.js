import React from 'react'
import ModalForm from '../components/modalForm'
import {connect} from 'react-redux'
import {Formik} from 'formik'
import {postSavedSearch, postChangeSearch, searchFormClose} from '../../redux/actions/searchForm'

const ModalFormContainer = ({initialData, postSavedSearch, postChangeSearch, formVisible, searchFormClose, formLoading}) => {
    const {search, name, options, slider, id} = initialData
    
	return formVisible ? 
	<Formik
	initialValues={{ 
		search: search || '',
		name: name || '',
		options: options || "relevance",
		slider: slider || 12,
		id
	}}
	onSubmit={values => {
		if (!values.id) postSavedSearch(values)
		else postChangeSearch(values)
	}}
	onReset={() => searchFormClose()}
	validate={values => {
		const errors = {}
		if (!values.search) errors.search = 'Введите поисковый запрос'
		if (!values.name) errors.name = 'Введите название запроса'
		if (values.slider > 50) errors.slider = 'Максимальное количество запросов = 50'
		if (!Number.isInteger(values.slider)) errors.slider = 'Только целые числа'
		return errors
	}} >
		{
			({handleSubmit, touched, errors, handleChange, handleBlur, values, setFieldValue, isValidating, handleReset}) => (
				<ModalForm 
				handleSubmit={handleSubmit}
				touched={touched}
				errors={errors}
				handleChange={handleChange}
				handleBlur={handleBlur}
				values={values}
				setFieldValue={setFieldValue}
				isValidating={isValidating} 
				formVisible={formVisible}
				formLoading={formLoading}
				handleReset={handleReset} />
			)
		}
	</Formik> : null 
}

const mapStateToProps = state => {
	return {
		formVisible: state.searchForm.formVisible,
		formLoading: state.searchForm.loading
	}
}

export default connect(mapStateToProps, {postSavedSearch, postChangeSearch, searchFormClose})(ModalFormContainer)