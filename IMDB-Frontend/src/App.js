import React, { useState } from 'react';
import './App.css'
// import Cards from "./components/cards/cards"
import Header from "./components/header/Header"
import MovieDetail from "./pages/movieDetail/movie"
import MovieList from "./components/movieList/movieList"
import Home from "./pages/home/home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/movie/:id" element={<MovieDetail />} />
                    <Route path="/movies/:type" element={<MovieList  />} />
                    <Route path="/*" element={<h1>Error Page</h1>} />
                </Routes> 
            </Router>
        </div>
    )
}

export default App;
