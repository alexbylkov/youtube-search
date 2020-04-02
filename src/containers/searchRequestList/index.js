import React, {useState} from 'react'
import {connect} from 'react-redux'
import Spinner from '../../components/UI/spinner'
import SearchListDescription from '../../components/searchListDescription'
import ApiItem from '../../components/apiItem'

const SearchRequestList = ({searchResponse, loading, searchRequestText}) => {

    const [layout, setLayout] = useState('list')
    const [ totalResults, ...result ] = searchResponse

    const spinner = loading ? <Spinner/> : null
    const content = !(loading || !searchResponse.length ) ? 
        <>
            <SearchListDescription
            layout={layout}
            changeLayout={e => setLayout(e)}
            searchRequestText={searchRequestText}
            totalResults={totalResults}
            />
            <div className={`search__result search__result_${layout}`} >
                {
                    result.map(item => 
                        <ApiItem 
                        key={item.videoId} 
                        item={item} />
                    )
                }
            </div>
        </>
    : null
    return (
        <>
            {spinner}
            {content}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        searchResponse: state.search.searchResponse,
        searchRequestText: state.search.searchRequestText,
        loading: state.search.loading,
        error: state.search.error
    }
}

export default connect(mapStateToProps)(SearchRequestList)