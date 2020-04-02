import React from 'react'

const ApiItem = ({item}) => {
    const {title, channel, img, viewCount} = item
    return (
        <div>
            <img src={img} alt={title}/>
            <span>
                <h2>{title}</h2>
                <h3>{channel}<br/>{viewCount}</h3>
            </span>
        </div>
    )
}
export default ApiItem