import React from 'react'
import { Popover} from 'antd'
import {Link} from 'react-router-dom'
import {HeartOutlined, HeartTwoTone} from '@ant-design/icons'
import {connect} from 'react-redux'
import {searchFormOpen, searchFormCancel} from '../../redux/actions/searchForm'

const popoverText = (
    <>
        <p>Поиск сохранен в разделе &#171;Избранное&#187;</p>
        <Link to="/liked">Перейти в избранное</Link>
    </>
)
const styleIcon = {fontSize: 22, color: '#1390E5'}

const HeartIcon = ({formSuccess, searchFormCancel, searchFormOpen}) => (
    <Popover 
    placement="bottom" 
    content={popoverText} 
    onVisibleChange={e => !e ? searchFormCancel() : null} 
    visible={formSuccess}
    trigger="click" >
        { 
            formSuccess ? 
            <HeartTwoTone 
            style={styleIcon} /> :
            <HeartOutlined
            style={styleIcon} 
            onClick={() => searchFormOpen()} 
            />
        }
    </Popover>
)

const mapStateToProps = state => {
    return { 
        formSuccess: state.searchForm.formSuccess
    }
}

export default connect(mapStateToProps, {searchFormOpen, searchFormCancel})(HeartIcon)




