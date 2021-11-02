import React, { useEffect, useState, useCallback } from 'react'
import { category as CATEGORIES, movieType, tvType } from '../../utils/constant';
import movieApi from '../../api/service/movieApi';
import MovieCard from '../MovieCard';
import './MovieGrid.scss'
import Btn from '../Button/Btn';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import InputField from '../InputField';

const MovieGrid = (props) => {

    const [movies, setMovies] = useState([])
    const [totalPage, setTotalPage] = useState(null)
    const [page, setPage] = useState(0) 

    const {keyword} = useParams()
    useEffect(() => {
        const getMovieList = async() => {
            let res = null;
            const params = {}
            if(keyword === undefined){
                switch(props.category){
                    case CATEGORIES.movie:
                        res = await movieApi.getMovieList(props.type ? props.type :movieType.upcoming, {params});
                        break;
                    default:
                        res = await movieApi.getTVList(props.type ? props.type : tvType.popular,{params})
                }
            }else{
                const params={
                    query:keyword
                }
                res =  res = await movieApi.search(props.category,{params})
            }
            setMovies(res.results)
            setTotalPage(res.total_pages)
        }
        getMovieList()
    }, [props.category, keyword,props.type])

    const loadMore = async () => {
        let res = null;
            const params = {
                page: page+ 1
            }
            if(keyword === undefined){
                switch(props.category){
                    case CATEGORIES.movie:
                        res = await movieApi.getMovieList(movieType.upcoming, {params});
                        break;
                    default:
                        res = await movieApi.getTVList(tvType.popular,{params})
                }
            }else{
                const params={
                    page: page +1,
                    query:keyword
                }
                res =  res = await movieApi.search(props.category,{params})
            }
            setMovies([...movies,...res.results])
            setPage(page + 1)
    }
    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword} type={props.type }/>
            </div>
            <div className="movie-grid">
                {
                    movies.length > 0 && movies.map((movie,index) => (
                        <MovieCard key={index} movie={movie} categoryMovie={props.category} />
                    ))
                }
            
            </div>
            { page < totalPage && 
            (
                <div className="movie-grid__load-more">
                    <Btn className="btn-outline" onClick={loadMore}>Load more</Btn>
                </div>
            )
           }
        </>
    )
}


const MovieSearch = (props) => {
    const history =  useHistory();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword :'')
    const pressSearch = useCallback(
        () => {
            if(keyword.trim().length >0 ){
                history.push(`/${CATEGORIES[props.category]}/search/${keyword}`)
            }else{
                if(props.type){
                    history.push(`/${CATEGORIES[props.category]}/type/${props.type}`)
                }else{
                    history.push(`/${CATEGORIES[props.category]}`)
                }
               
            }
        },
        [keyword,props.category,history,props.type],
    )

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault()
            if(e.keyCode === 13){
                pressSearch()
            }
        }
        document.addEventListener('keyup',enterEvent)
        return () => {
            document.removeEventListener('keyup',enterEvent)
        }
    }, [keyword,pressSearch])
    return(
        <div className="movie-search">
            <InputField
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                />
            <div className="movie-search__icon" onClick={() => pressSearch()}>
                <i className="bx bx-search"></i>
            </div>
        </div>
    )
}
export default MovieGrid
