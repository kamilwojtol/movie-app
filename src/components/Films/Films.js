import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

import FavButton from "./FavButton/FavButton";

const FilmContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FilmInput = styled.input`
  padding: 0.5rem 1rem;
  background-color: #e5e5e5;
  margin: 3rem 1rem;
  width: 300px;
  font-size: 20px;
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
  color: #000;
`;

const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1150px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const MovieBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MoviePoster = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

const MovieTextBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
`;

const MovieTitle = styled.h2`
  padding: 0.5rem 1rem;
  width: 300px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: #e5e5e5;
`;

const MovieScore = styled.p`
  font-size: 20px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: ${(props) => {
    if (props.average > 8) {
      return "green";
    } else if (props.average > 7) {
      return "lightgreen";
    } else if (props.average > 6) {
      return "yellow";
    } else if (props.average > 5) {
      return "orange";
    } else {
      return "red";
    }
  }};
  font-family: "Poppins", sans-serif;
  color: ${(props) => {
    if (props.average > 8) {
      return "white";
    } else if (props.average > 7) {
      return "black";
    } else if (props.average > 6) {
      return "black";
    } else if (props.average > 5) {
      return "black";
    } else {
      return "white";
    }
  }};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Films() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  // const [favourites, setFavourites] = useState([]);

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=fc1a703d1b4bcf6aa6bf88743eca9e34&query=`;
  const POPULAR_API =
    "https://api.themoviedb.org/3/movie/popular?&api_key=fc1a703d1b4bcf6aa6bf88743eca9e34";

  useEffect(() => {
    const getPopularMovies = () => {
      axios.get(POPULAR_API).then((res) => setMovies(res.data.results));
    };

    getPopularMovies();
  }, []);

  const getSearchResults = (event) => {
    setSearch(event.target.value);
  };

  // const addToFavourite = (poster, title) => {
  //   const favMovie = [poster, title];
  //   setFavourites((prevState) => [...prevState, favMovie]);
  // };

  useEffect(() => {
    axios.get(SEARCH_API + search).then((res) => setMovies(res.data.results));
  }, [search]);

  return (
    <FilmContainer>
      <FilmInput
        className="search"
        type="search"
        placeholder="Search movie"
        value={search}
        onChange={getSearchResults}
      />
      <MovieWrapper>
        {movies.map((movie) => {
          const image = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`;

          return (
            <MovieBlock key={movie.id}>
              <MoviePoster src={image} alt="poster" />
              <MovieTextBlock>
                <MovieTitle>{movie.original_title}</MovieTitle>
                <MovieScore average={movie.vote_average}>
                  {movie.vote_average}
                </MovieScore>
                {/* <FavButton
              onButtonClick={addToFavourite}
              poster={image}
              title={movie.original_title}
            /> */}
              </MovieTextBlock>
            </MovieBlock>
          );
        })}
      </MovieWrapper>
    </FilmContainer>
  );
}
