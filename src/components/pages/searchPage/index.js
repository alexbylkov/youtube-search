import React from 'react'
import {Row, Col} from 'antd'
import SearchRequestList from '../../../containers/searchRequestList'
import SearchInput from '../../../containers/searchInput'
import Header from '../../header'

import './searchPage.sass'

const SearchPage = () => (
    <>
        <Header/>
        <Row>
            <Col span={14} offset={5}>
                <SearchInput /> 
                <SearchRequestList/>
            </Col>
        </Row>         
    </>
)

export default SearchPage