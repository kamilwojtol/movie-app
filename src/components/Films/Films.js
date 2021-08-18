import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Films() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=fc1a703d1b4bcf6aa6bf88743eca9e34&query=`;
  const POPULAR_API =
      "https://api.themoviedb.org/3/movie/popular?&api_key=fc1a703d1b4bcf6aa6bf88743eca9e34";



  useEffect(() => {
    const getPopularMovies = () => {
      axios.get(POPULAR_API).then((res) => setMovies(res.data.results));
    }

    getPopularMovies();
  }, []);



  const getSearchResults = (event) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    axios.get(SEARCH_API + search ).then((res) => setMovies(res.data.results));
  }, [search])

  return <div>
      <input className="search" type="search" placeholder="Search movie" value={search} onChange={getSearchResults}/>
    {movies.map((movie) => {
      const image = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`

      return (
          <>

          <img src={image} alt="poster"/>
          <h2>{movie.original_title}</h2>
            <p>{movie.vote_average}</p>
          </>
      )
    })}
  </div>;
}
