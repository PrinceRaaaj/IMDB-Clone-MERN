import React, { useState } from 'react';
import './App.css'
// import Cards from "./components/cards/cards"
import Header from "./components/header/Header"
import MovieDetail from "./pages/movieDetail/movie"
import MovieList from "./components/movieList/movieList"
import Home from "./pages/home/home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {

    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/movie/:id"><MovieDetail /></Route>
                <Route path="/movies/:type"><MovieList  /></Route>
                <Route path="/*"><h1>Error PAge</h1></Route>
                </Switch> 
            </Router>
        </div>
    )
}

export default App;
