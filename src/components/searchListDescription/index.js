import React from 'react'
import {BarsOutlined, AppstoreOutlined} from '@ant-design/icons'

const SearchListDescription = ({searchRequestText, totalResults, changeLayout, layout}) => (
    <div className="search__description">
        <div className="search__title">Видео по запросу &#171;{searchRequestText}&#187;
            <span>{totalResults}</span>
        </div>
        <div>
            <BarsOutlined 
            onClick={() => changeLayout('list')}
            style={{ 
                fontSize: '25px', 
                color: (layout === 'list') ? '#000' : '#b3b3b3' 
            }} />
            <AppstoreOutlined 
            onClick={() => changeLayout('grid')}
            style={{ 
                fontSize: '25px', 
                color: (layout === 'grid') ? '#000' : '#b3b3b3' 
            }} />  
        </div>
    </div>
)

export default SearchListDescription