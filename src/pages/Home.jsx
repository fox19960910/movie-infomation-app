import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Btn from "../components/Button/Btn";
import MovieList from "../components/MovieList";
import { category, movieType, tvType } from "../utils/constant";

console.log('movieType',movieType.up_coming)
const Home = () => {
  return <section>
    <Hero/>
    <div className="container">
      {/* TRENDING MOVIE LIST */}
      <section className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending Movies</h2>
         <Link to={`/movie/type/${movieType.popular}`}>
           <Btn className="btn-outline">
             View more
           </Btn>
         </Link>
        </div>
        <MovieList category={category.movie} type={movieType.popular}/>
      </section>
      {/* TOP_RATE MOVIE LIST */}
      <section className="section mb-3">
        <div className="section__header mb-2">
          <h2>Top rated Movies</h2>
         <Link to={`/movie/type/${movieType.top_rated}`}>
           <Btn className="btn-outline">
             View more
           </Btn>
         </Link>
        </div>
        <MovieList category={category.movie} type={movieType.top_rated}/>
      </section>
      {/* UPCOMING MOVIE LIST */}
      <section className="section mb-3">
        <div className="section__header mb-2">
          <h2>Upcoming Movies</h2>
         <Link to={`/movie/type/${movieType.upcoming}`}>
           <Btn className="btn-outline">
             View more
           </Btn>
         </Link>
        </div>
        <MovieList category={category.movie} type={movieType.upcoming}/>
      </section>
      {/* TRENDING TV LIST */}
      <section className="section mb-3">
        <div className="section__header mb-2">
          <h2>Trending TV series</h2>
         <Link to={`/tv/type/${tvType.popular}`}>
           <Btn className="btn-outline">
             View more
           </Btn>
         </Link>
        </div>
        <MovieList category={category.tv} type={tvType.popular}/>
      </section>
      {/* TOP_RATE TV LIST */}
      <section className="section mb-3">
        <div className="section__header mb-2">
          <h2>Top rated TV series</h2>
         <Link to={`/tv/type/${tvType.top_rated}`}>
           <Btn className="btn-outline">
             View more
           </Btn>
         </Link>
        </div>
        <MovieList category={category.tv} type={tvType.top_rated}/>
      </section>
      {/* ON THE AIR TV LIST */}
      <section className="section mb-3">
        <div className="section__header mb-2">
          <h2>On the air TV series</h2>
         <Link to={`/tv/type/${tvType.on_the_air}`}>
           <Btn className="btn-outline">
             View more
           </Btn>
         </Link>
        </div>
        <MovieList category={category.tv} type={tvType.on_the_air}/>
      </section>
    </div>
  </section>;
};

export default Home;
