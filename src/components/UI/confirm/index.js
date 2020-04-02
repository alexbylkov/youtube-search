import React from 'react'
import {Modal} from 'antd'
import {ExclamationCircleOutlined} from '@ant-design/icons'

const openConfirm = (handleDelete, id) => (
    Modal.confirm({
        title: 'Вы уверены, что хотите удалить запрос?',
        icon: <ExclamationCircleOutlined style={{color: 'red'}}/>,
        content: 'Отменить это действие невозможно',
        okText: "Удалить",
        cancelText: "Отмена",
        onOk() {
            handleDelete(id)
        }
    })
)

export default openConfirm