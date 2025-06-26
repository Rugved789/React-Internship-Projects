import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Heading from "./components/Heading"
import SearchBar from "./components/SearchBar"
import MovieCard from "./components/MovieCard"


const API_URL = "http://www.omdbapi.com/?apikey=e54ba0ce"

function App() {

  const [movies, setMovies] = useState([]);


  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

  }

  useEffect(() => {

    const keywords = ["star", "love", "man", "war", "life", "day", "night", "girl", "boy", "dog"];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    searchMovie(randomKeyword);
  }, [])


  return (
    <>
      <div className="home">
        <Heading />
        <SearchBar
          search_movie={searchMovie} />

        {movies?.length > 0 ? (
          <div className="container">
            {
              movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </>
  )
}

export default App;
