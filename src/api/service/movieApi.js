import axiosClient from '../axiosClient';
import {category,movieType,tvType} from '../../utils/constant'


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
        const url =  'search/' + category[cat];
        return axiosClient.get(url,params)
    },
    detail : (cat,id, params) => {
        const url =  category[cat] + '/' + id 
        return axiosClient.get(url,params)
    },
    credits: (cat, id, params ) => {
        const url = category[cat] + '/' + id + '/credits';
        return axiosClient.get(url, params)
    },
    similar: (cat, id, params) => {
        const url = category[cat] + '/' + id + '/similar';
        return axiosClient.get(url, params)
    }
}
export default movieApi