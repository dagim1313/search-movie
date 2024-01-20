import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./assets/Search.svg";
import MovieCard from "./MovieCard";
//f3e03e49

const API_URL = "http://www.omdbapi.com?apikey=f3e03e49";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchterm, setSearchTerm] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies(`batman`);
  }, []);
  return (
    <>
      <div className="app">
        <h1>MovieLand </h1>
        <div className="search">
          <input
            value={searchterm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="search for movies"
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchterm)}
          />
        </div>

        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>no movies is found</h2>
          </div>
        )}
      </div>
    </>
  );
};
export default App;
