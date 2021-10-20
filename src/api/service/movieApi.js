import axiosClient from '../axiosClient'

export const category = {
    MOVIE:'movie',
    TV:'tv'
}
export const movieType = {
    UP_COMING:'upcoming',
    POPULAR:'popular',
    TOP_RATED:'top_rated',
}
export const tvType = {
    POPULAR:'popular',
    TOP_RATED:'top_rated',
    ON_THE_AIR:'on_the_air',
}


const movieApi = {
    getMovieList : (type, params) => {
        const url =`movie/${movieType[type]}`;
        return axiosClient.get(url,params)
    },
    getTVList : (type, params) => {
        const url =`tv/${tvType[type]}`;
        return axiosClient.get(url,params)
    },
    getVideoList : (type, id) => {
        const url = category[type] + '/' + id + '/videos';
        return axiosClient.get(url,{params:{}})
    },
    search : (cat, params) => {
        const url =  'search' + category[cate];
        return axiosClient.get(url,params)
    },
    detail : (cat,id, params) => {
        const url =  category[cat] + '/' + id 
        return axiosClient.get(url,params)
    },
    credits: (cat, id) => {
        const url = category[cat] + '/' + id + '/credits';
        return axiosClient.get(url, params)
    },
    similar: (cat, id) => {
        const url = category[cat] + '/' + id + '/similar';
        return axiosClient.get(url, params)
    }
}
export default movieApi