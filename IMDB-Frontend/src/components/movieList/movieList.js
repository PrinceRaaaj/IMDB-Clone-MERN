import React, { useEffect, useState } from 'react'
import Cards from "../cards/cards"
import "./movieList.css"
import { useParams } from 'react-router-dom';

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    useEffect(() => {
        getData()
    },[])
    
    useEffect(() => {
        getData()
    },[type])

    const getData = () => {
        fetch(`http://localhost:9000/api/getMovies/${type ? type : "popular"}`)
        .then(response => response.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
            {
                movieList.map(movie => (
                    <Cards movie={movie} />
                ))
            }
            </div>
        </div>
    );
};

export default MovieList;