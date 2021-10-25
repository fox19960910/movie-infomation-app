import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { category } from "../../utils/constant";
import apiConfig from "../../api/apiConfig";
import "./MovieCard.scss";
const MovieCard = ({ movie, categoryMovie }) => {
  const { id, poster_path, backdrop_path, title, name } = movie;

  const link = `/${category[categoryMovie]}/${id}`;
  const movieBackground = apiConfig.w500Image(poster_path || backdrop_path);
  return (
    <Link to={link}>
      <div
        className="movie-card"
        style={{ backgroundImage: `url(${movieBackground})` }}
      >
        <div className="movie-card__play">
          <i className="bx bx-play"></i>
        </div>
      </div>
      <h3>{title || name}</h3>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
