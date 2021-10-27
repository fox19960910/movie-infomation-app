import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import movieApi from '../../api/service/movieApi';
import apiConfig from '../../api/apiConfig';

import './Detail.scss'
const Detail = props => {

    const {category,id} = useParams()
    const [movieDetail, setMovieDetail] = useState(null)

    useEffect(() => {
        const getMovieDetail = async () => {
            let res = null;
            const params ={};
            if(id) { 
                res = await movieApi.detail(category,id,{params})
            }
            console.log('res',res)
            setMovieDetail(res)
        }
        getMovieDetail();
    }, [category,id])
    return (
        <>
            {
                movieDetail && (
                    <div className="movie-detail">
                        <div className="movie-detail__backdrop" style={{backgroundImage:`url(${apiConfig.originalImage(movieDetail.backdrop_path || movieDetail.poster_path)})`}}></div>
                        <div className="mb-3 movie-detail__content container">
                            <div className="movie-detail__poster">
                                <img src={apiConfig.w500Image(movieDetail.poster_path || movieDetail.backdrop_path)} alt={movieDetail.title}/>
                            </div>

                        </div>
                    </div>
            )}
        </>
    )
}


export default Detail
