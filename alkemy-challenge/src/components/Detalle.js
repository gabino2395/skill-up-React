import React from "react";
import { Navigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

const Detalle = () => {
    let token = sessionStorage.getItem("token");
    let query = new URLSearchParams(window.location.search);
    let movieID = query.get("movieID");
    const[movie,setMovie]=useState(null)
    const API_IMG = "https://image.tmdb.org/t/p/w500/";
    
    useEffect(() => {
        const endPoint= `https://api.themoviedb.org/3/movie/${movieID}?api_key=279b0ab905a9e9e8f2d8373ae4d217a0&language=es-ES`
        
        axios
        .get(endPoint)
        .then((response) => {
            const movieData = response.data;
            //   setMovieList(movieData.results);
            setMovie(movieData)
    })
    .catch((error) => {
      swal(
          <h2>upps, hubo un error</h2>
      );
    });;
  }, []);



  return (
    <>
      {!token && <Navigate to="/" />}
     {!movie && <p>cargando...</p> }
      { movie && 
      <>

      <div>{movie.title}</div>

      <div className="row">
        <div className="col-4">
            <img src={API_IMG+movie.poster_path} className='img-fluid' alt="" />
        </div>
        <div className="col-8">
          <h5>{movie.title}</h5>
          <h5>fecha de estreno: {movie.release_date}</h5>
          <h5>reseña</h5>
          <p>
          {movie.overview}
          </p>
          <h5>popularidad :{movie.vote_average}</h5>

          <h5>genero:</h5>
          <ul>
            {movie.genres.map(oneGenre=><li key={oneGenre.id}>{oneGenre.name}</li>)}
           

          </ul>
        </div>
      </div>
      </>
      }
    </>
  );
};

export default Detalle;
// sessionStorage
