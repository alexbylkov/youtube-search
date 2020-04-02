import React, {useEffect, useState} from 'react'
import {Input} from 'antd'
import {search, searchRequestDelete} from '../../redux/actions/search'
import {connect} from 'react-redux'
import ModalForm from '../../form/containers/modalForm'
import HeartIcon from '../../components/heartIcon'


const SearchInput = ({searchRequest, search, searchRequestDelete}) => {

    const [inputValue, setInputValue] = useState('')
    useEffect(() => () => searchRequestDelete(), [searchRequestDelete])

    const {Search} = Input
    return (
        <>                      
            <h1 className={searchRequest ? "search__form_open" : "search__form_close"}>
                Поиск видео
            </h1>
            {
                !searchRequest ? 
                <Search
                placeholder="Что хотите посмотреть?"
                enterButton="Найти"
                size="large"
                onSearch={e => e ? search(e) : null}
                onChange={e => setInputValue(e.target.value)}
                suffix={<span/>}
                />:
                <Search
                enterButton="Найти"
                size="large"
                defaultValue={searchRequest}
                onSearch={e => e ? search(e) : null}
                onChange={e => setInputValue(e.target.value)}
                suffix={ 
                    <HeartIcon />}
                />
            }
            <ModalForm initialData={{search: inputValue}}/> 
        </>
    )
}

const mapStateToProps = state => {
    return {
        searchRequest: state.search.searchRequestText
    }
}
export default connect(mapStateToProps, {search, searchRequestDelete})(SearchInput)