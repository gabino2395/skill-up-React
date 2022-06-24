import React from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
const Listado = () => {
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  let token = sessionStorage.getItem("token");
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/movie/popular?api_key=279b0ab905a9e9e8f2d8373ae4d217a0&language=es-ES&page=1";
    axios
      .get(endPoint)
      .then((response) => {
        const apiData = response.data;
        setMovieList(apiData.results);
      })
      .catch((error) => {
       
        swal(
            <h2>upps, hubo un error</h2>
        );
      });
  }, [setMovieList]);
  return (
    <>
      {!token && <Navigate to="/" />}
      <div className="row">
        {movieList.map((oneMovie, index) => {
          return (
            <div className="col-md-3" key={index}>
              <div className="card my-4">
                <img
                  src={API_IMG + oneMovie.poster_path}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{oneMovie.title}</h5>
                  <p className="card-text">
                    {oneMovie.overview.substring(0, 50)}...
                  </p>
                  <Link to={`/detalle?movieID=${oneMovie.id}`}className="btn btn-primary">
                   view detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Listado;
// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US