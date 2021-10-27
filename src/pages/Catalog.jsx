import React from 'react'
import PageTemplate from '../components/PageTemplate'
import { useParams } from 'react-router-dom'
import { category as CATEGORIES, movieType, tvType } from '../utils/constant';
import MovieGrid from '../components/MovieGrid';

const Catalog = () => {
    const {category,type} = useParams()
    const renderPageHeader = () => {
        let title = null
        if(type){
            if( category === CATEGORIES.movie){
                switch(type) {
                    case movieType.popular:
                        title = 'Trending Movies';
                    break;
                    case movieType.top_rated:
                        title = 'Top rated Movies';
                    break;
                    case movieType.upcoming:
                        title = 'Upcoming Movies';
                    break;
                    default:
                        title = 'Upcoming Movies'
                }
            }
            else{
                switch(type) {
                    case tvType.popular:
                        title = 'Trending TV series'
                    break;
                    case tvType.top_rated:
                        title = 'Top rated TV series'
                    break;
                    case tvType.on_the_air:
                        title = 'On the air TV series'
                    break;
                }
            }
        }else{
            category === CATEGORIES.movie ? title = 'Movies' : title = 'TV Series'
        }
        return title

    }
    return (
        <div className="catalog-page">
            <PageTemplate >
                <PageTemplate.Header>
                    {renderPageHeader()}
                </PageTemplate.Header>

                <PageTemplate.Body>
                    <MovieGrid category={category} type={type}></MovieGrid>
                </PageTemplate.Body>
            </PageTemplate>
        </div>
    )
}

export default Catalog
