import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const MOVIE_API =
  "https://api.themoviedb.org/3/discover/movie?&api_key=fc1a703d1b4bcf6aa6bf88743eca9e34";

export default function Films() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(MOVIE_API).then((res) => setMovies(res));
    console.log(movies);
  }, [movies]);

  return <div></div>;
}
