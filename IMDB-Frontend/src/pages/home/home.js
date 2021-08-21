import React, { useEffect, useState } from 'react'
import MovieList from "../../components/movieList/movieList"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { Link } from "react-router-dom"
import "./home.css"

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("http://localhost:9000/api/getMovies/popular")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])
    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                {
                    popularMovies.map(movie => (
                        <Link style={{textDecoration: "none", color: "white"}} to={`/movie/${movie.id}`}>
                            <div className="posterImage" onClick={() => alert("Clicked")}>
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>
                            <div className="posterImage__overlay">
                                <div class="posterImage__title">{movie ? movie.original_title : ""}</div>
                                <div class="posterImage__runtime">{movie ? movie.release_date : ""}<span className="posterImage__rating">{movie ? movie.vote_average : ""} <i class="fas fa-star" />{"  "}</span></div>
                                <div class="posterImage__description">{movie ? movie.overview: ""}</div>
                            </div >
                        </Link>
                    ))
                }
                </Carousel>
            </div>
            
            <MovieList />
        </>
    );
};

export default Home;