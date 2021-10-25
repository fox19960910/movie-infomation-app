import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./MovieList.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import movieApi from "../../api/service/movieApi";
import { category } from "../../utils/constant";
import MovieCard from "../MovieCard";

const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieList = async () => {
      let res = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            res = await movieApi.getMovieList(props.type, { params });
            break;
          default:
            res = await movieApi.getTVList(props.type, { params });
        }
      } else {
        res = await movieApi.similar(props.category, props.id, { params });
      }
      if (props.category === "upcoming") {
        console.log("res", res);
      }
      setMovieList(res.results);
    };
    getMovieList();
  }, []);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={"auto"}>
        {movieList.length > 0 &&
          movieList.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard movie={item} categoryMovie={props.category} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
