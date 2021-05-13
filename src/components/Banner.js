import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../services/axios";
import requests from "../services/Request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
      return req;
    }
    fetchMovies();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__play__button">Play</button>
          <button className="banner__info__button">More info</button>
        </div>
        <h1 className="banner__description">
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
