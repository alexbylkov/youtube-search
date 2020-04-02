import React from 'react'
import {Form, Input, Slider, InputNumber, Row, Col, Select, Button, Modal} from 'antd'
const {Option} = Select

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

const ModalForm = ({handleSubmit, touched, errors, handleChange, handleBlur, values, setFieldValue, formVisible, formLoading, handleReset}) => {
    const action = (values.id ? 'Изменить' : 'Сохранить')
    return (
        <Modal
        visible={formVisible}   
        title={`${action} запрос`}
        onCancel={handleReset}
        footer={[
            <Button 
            key="back" 
            onClick={handleReset} > 
            Отмена </Button>,
            <Button 
            key="submit" 
            type="primary" 
            loading={formLoading}        
            onClick={handleSubmit} >
            {action}</Button>
        ]} >
            <Form layout="vertical" >
                <Form.Item 
                required
                validateStatus={validateField(touched.search, errors.search)}
                help={!touched.search ? null : errors.search}
                label="Запрос">
                    <Input 
                    disabled={values.id ? false : true} 
                    id="search"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.search}
                    label="Запрос" />
                </Form.Item>
                <Form.Item 
                required
                validateStatus={validateField(touched.name, errors.name)}
                help={!touched.name ? null : errors.name}
                label="Название">
                    <Input
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    label="Название" />
                </Form.Item>
                <Form.Item 
                label="Сортировать по">
                    <Select
                    defaultValue={values.options}
                    id="options"
                    onChange={e => setFieldValue('options', e)}
                    onBlur={handleBlur} >
                        <Option value="relevance">Популярности</Option>
                        <Option value="rating">Рейтингу</Option>
                        <Option value="date">Дате</Option>
                        <Option value="title">Заголовкам</Option>
                        <Option value="videoCount">Количеству видео на канале</Option>
                        <Option value="viewCount">Просмотрам</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                validateStatus={validateField(touched.slider, errors.slider)}
                help={!touched.slider ? null : errors.slider}
                label="Максимальное количество">
                    <Row>
                        <Col span={18}>
                            <Slider
                            id="slider"
                            min={1}
                            max={50}
                            onChange={e => setFieldValue('slider', e)}
                            value={values.slider} />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                            type="number"
                            id="slider"
                            min={1}
                            max={50}
                            style={{ marginLeft: 16 }}
                            value={values.slider}
                            onChange={e => setFieldValue('slider', typeof e === 'number' ? e : values.slider)} />
                        </Col>
                    </Row>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalForm