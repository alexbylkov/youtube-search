import React, {useState, useEffect} from 'react'
import {favourites, postDeleteSearch} from '../../redux/actions/favourites'
import { connect } from 'react-redux'
import FavouritesItem from '../../components/favouritesItem'
import ModalForm from '../../form/containers/modalForm'
import {searchFormOpen} from '../../redux/actions/searchForm'
import {search} from '../../redux/actions/search'
import Loading from '../../components/UI/spinner'

const FavouritesList = ({favourites, searchFormOpen, search, history, postDeleteSearch, list, listLoading}) => {

    const [item, setItem] = useState({})
    useEffect(() => {favourites()}, [favourites])

    const showModal = itemValue => {
        searchFormOpen()
        setItem(itemValue)
    }

    const handleClick = (searchRequest, options, slider) => {
        search(searchRequest, options, slider)  
        history.push('/')
    }
    
    return (
        <>
            {   
                listLoading ? 
                <Loading/> :
                list.length === 0 ?
                <h2 className="favorites__massage">У Вас нет избранных запесей</h2> :
                list.map(item =>  
                    <FavouritesItem 
                    key={item.id} 
                    itemList={item}
                    handleClick={handleClick}
                    handleDelete={id => postDeleteSearch(id)}
                    showModal={showModal} />
                )
            }
            <ModalForm initialData={item}/>

        </>
    )
}

const mapStateToProps = state => {
    return {
        list: state.favourites.list,
        listLoading: state.favourites.loading
    }
}

export default connect(mapStateToProps, {favourites, searchFormOpen, postDeleteSearch, search})(FavouritesList)
