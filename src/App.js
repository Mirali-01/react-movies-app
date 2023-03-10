import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import FavMovies from "./components/FavMovies";
import apiKey from "./models/hideKey";
import Navbar from "./components/Navbar";
import movieInfo from "./models/movieInfo";
import Button from "./components/Button";

function App() {
  //State to hold movie data
  const [movie, setMovie] = useState(null);
  const [poster, setPoster] = useState(null); //make a new reactive value (state) for every function (setter)
  
  const movieList = () => {
    setPoster(    
      movieInfo.map((favMovie) => {
      return favMovie.Type.includes("movie") ? <FavMovies poster={favMovie} />  : null;
    }))
  } 
  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );
    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };

  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Spider-man");
  }, []);

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
      <Navbar />
      <Form movieSearch={getMovie} />
      <MovieDisplay currentMovie={movie} />
      <Button best={"Favorite Movies"} toggle={movieList} />
      <div>{poster} </div>
    </div>
  );
}

export default App;

// Hiding API key?
