import React from 'react'
import useMovieTrailer from '../customHooks/useMovieTrailer'
import { UseDispatch, useDispatch, useSelector } from 'react-redux'
import { UseSelector } from 'react-redux'
import VideoBackground from './VideoBackground'

const MoviePlayer = ({keyId}) => {

  //console.log(movieId);
  //const selector = useSelector((store) => store.movies?.trailerVideo)
  //useMovieTrailer(movieId);
  //console.log(selector,"movie id");
  

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies,"Movie Player");
  const {id} = movies[3];
  useMovieTrailer(id);
  return (
    <div>
        <VideoBackground movieId={id}/>
        <div>Text container</div>
    </div>
  )
}

export default MoviePlayer