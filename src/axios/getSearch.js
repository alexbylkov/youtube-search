import axios from 'axios'

const getSearch = async (searchText, order = 'relevance', results = 12) => {

    const key = 'AIzaSyDlhHZlVb9YQUd4aanjc245bOE9P2WlTNc'
    const baseUrl = 'https://www.googleapis.com/youtube/v3/'

    const urlKeysVideo = `${baseUrl}search?part=snippet&q=${searchText}&type=video&key=${key}&maxResults=${results}&order=${order}`

    const responseVideoId = await axios.get(urlKeysVideo)
    const videoIdList = responseVideoId.data.items.map(item => item.id.videoId).toString()
    const totalResults = responseVideoId.data.pageInfo.totalResults

    const urlListVideo = `${baseUrl}videos?id=${videoIdList}&part=snippet,statistics&key=${key}`;  
    
    const responseListVideo = await axios.get(urlListVideo)  
    const finalListVideo = responseListVideo.data.items.map(item => {
        const viewCountString = view => {
            if (view.substr(0, view.length - 6)) return `${view.substr(0, view.length - 6)} млн. просмотров` 
            if (view.substr(0, view.length - 3)) return `${view.substr(0, view.length - 3)} тыс. просмотров` 
            return `${view} просмотров` 
        }
        return {
            title: item.snippet.title,
            channel: item.snippet.channelTitle,
            img: item.snippet.thumbnails.medium.url,
            videoId: item.id,
            viewCount: viewCountString(item.statistics.viewCount)
        }
    })
    return [totalResults, ...finalListVideo]
}

export default getSearch