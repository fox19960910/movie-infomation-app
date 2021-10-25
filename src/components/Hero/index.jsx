import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Hero.scss";

import movieApi from "../../api/service/movieApi";
import { movieType } from "../../utils/constant";
import apiConfig from "../../api/apiConfig";

import Btn from "../Button/Btn";
import { useHistory } from "react-router-dom";
import ModalTrailer from "../Modal/ModalTrailer";

const Hero = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [movieItem, setMovieItem] = useState(null);
  const [activeModal, setActiveModal] = useState(false)
  SwiperCore.use([Autoplay]);
  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const res = await movieApi.getMovieList(movieType.popular, { params });
        setMovieItems(res.results.splice(1, 5));
      } catch (err) {
        console.log("error", err);
      }
    };
    getMovies();
  }, []);

  const watchTrailerMovie =   (item) => {
     setMovieItem(item)
     setActiveModal(true)
  }
  return (
    <>
      <div className="hero">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}
          // autoplay={{delay:3000}}
        >
          {movieItems &&
            movieItems.length > 0 &&
            movieItems.map((item, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <HeroItems item={item} className={isActive ? "active" : ""} watchTrailerMovie={watchTrailerMovie} />
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      {
        activeModal &&  <ModalTrailer item={movieItem} active={activeModal} closeModal={() => setActiveModal(false)}></ModalTrailer>
      }
     
    </>
  );
};

const HeroItems = ({ item, className,watchTrailerMovie }) => {


  const history = useHistory();
  const background =
    item && apiConfig.originalImage(item.backdrop_path)
      ? apiConfig.originalImage(item.backdrop_path)
      : apiConfig.originalImage(item.backdrop_path);

  return (
    <div
      className={`hero__item ${className ? className : ""}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero__content container">
        <div className="hero__info">
          <h2 className="hero__title">{item.title}</h2>
          <div className="hero__overview">{item.overview}</div>
          <div className="btns">
            <Btn onClick={() => history.push("/movie" + item.id)}>
              Watch now
            </Btn>
            <Btn className="btn-outline" onClick={() =>  watchTrailerMovie(item)}>
              Watch trailer
            </Btn>
          </div>
        </div>

        <div className="hero__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt={item.title} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
