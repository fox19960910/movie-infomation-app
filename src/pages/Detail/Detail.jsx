import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../../api/service/movieApi";
import apiConfig from "../../api/apiConfig";

import "./Detail.scss";
import CastList from "./CastList";
import { category as CATEGORIES } from "../../utils/constant";
import RateStar from "../../components/RateStar";
import ModalTrailer from "../../components/Modal/ModalTrailer";
import MovieList from "../../components/MovieList";

const Detail = (props) => {
  const { category, id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  const [activeModal, setActiveModal] = useState(false)
  useEffect(() => {
    const getMovieDetail = async () => {
      let res = null;
      const params = {};
      if (id) {
        res = await movieApi.detail(category, id, { params });
      }
      setMovieDetail(res);
    };
    getMovieDetail();
  }, [category, id]);

  
  return (
    <>
      {movieDetail && (
        <div className="movie-detail">
          <div
            className="movie-detail__backdrop"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                movieDetail.backdrop_path || movieDetail.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-detail__content container">
            <div className="movie-detail__poster">
              <div
                className="movie-detail__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    movieDetail.backdrop_path || movieDetail.poster_path
                  )})`,
                }}
              ></div>
            </div>
            <div className="movie-detail__info">
              <h2 className="movie-detail__title">
                {movieDetail.title || movieDetail.name}
                <span className="movie-detail__category">
                  {category === CATEGORIES.tv ? "Tv series" : "Movie"}
                </span>
              </h2>
              <div className="movie-detail__review">
                <div className="score">
                  <RateStar starNum={10} starRate={movieDetail.vote_average} />
                  <div className="movie-detail__label">
                    {movieDetail.vote_count} Voted count
                  </div>
                </div>
                <span className="movie-detail__trailer  movie-detail__label  movie-detail__label-2"
                    onClick={() => setActiveModal(true)}
                  >
                  <i className='bx bx-play-circle'></i> Watch trailer
                </span>
              </div>
              <div className="movie-detail__genres">
                {movieDetail.genres &&
                  movieDetail.genres.map((genre, index) => (
                    <span key={index}>{genre.name}</span>
                  ))}
              </div>

              <div className="movie-detail__overview">
                {movieDetail.overview}
              </div>
              <div className="movie-detail__cast">
                <div className="cast-header">
                  <h2>Casts</h2>
                </div>
                <CastList id={movieDetail.id} />
              </div>
   
            </div>
          </div>
            <section className="section mb-3">
              <div className="section__header mb-2">
                  <h2>Similar {category === CATEGORIES.movie ? 'movie' : 'TV Series'}</h2>
              </div>
              <MovieList category={category} id={id} type="similar"/>
            </section>          
        </div>
      )}

      {
        activeModal &&  <ModalTrailer item={movieDetail} active={activeModal} closeModal={() => setActiveModal(false)}></ModalTrailer>
      }
    </>
  );
};

export default Detail;
