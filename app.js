const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express();
app.use(express.static("public"))
app.use(cors())

app.get("/api/getMovies/popular", (req,res)=>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
    .then(result =>res.send(result.data))
});

app.get("/api/getMovies/top_rated", (req,res)=>{
    axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
    .then(result =>res.send(result.data))
});

app.get("/api/getMovies/upcoming", (req,res)=>{
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
    .then(result =>res.send(result.data))
});

app.get("/api/getMovieDetail/:id", (req,res)=>{
    const { id } = req.params
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(result =>res.send(result.data))
});

app.listen(9000, ()=>{
  console.log("App started at port 9000");
});