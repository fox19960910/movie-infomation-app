import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movieApi from "../../api/service/movieApi";
import apiConfig from "../../api/apiConfig";

import "./Detail.scss";
import CastList from "./CastList";
import { category as CATEGORIES } from "../../utils/constant";
import RateStar from "../../components/RateStar";

const Detail = (props) => {
  const { category, id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const getMovieDetail = async () => {
      let res = null;
      const params = {};
      if (id) {
        res = await movieApi.detail(category, id, { params });
      }
      console.log("res", res.vote_average);
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
                    {movieDetail.vote_average} IMDb
                  </div>
                </div>
              </div>
              <div className="movie-detail__status">
                <span className="status movie-detail__label  movie-detail__label-1">
                  {movieDetail.status}
                </span>
                <span className="release-date movie-detail__label movie-detail__label-1">
                  {movieDetail.release_date}
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
        </div>
      )}
    </>
  );
};

export default Detail;
