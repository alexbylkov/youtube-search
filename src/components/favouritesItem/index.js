import React from 'react'
import Confirm from '../UI/confirm'

const FavouritesItem = ({itemList, handleClick, handleDelete, showModal}) => {
    const {name, search, slider, options, id} = itemList
    return (
        <>
            <li className="favorites__item">
                <div className="favorites__text" >
                    <span onClick={() => handleClick(search, options, slider)}>{name}</span>
                    <div>
                        <button onClick={() => showModal(itemList)}>Изменить</button>
                        <button onClick={() => Confirm(handleDelete, id)}>Удалить</button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default FavouritesItem