import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/Constants'
import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import useMovieTrailer from '../customHooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    //fetch trailer video
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
    console.log(trailerVideo,"hai kch")
    useMovieTrailer(movieId);

  return (
    <div className='w-screen' >
        <iframe 
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVideo[0]?.key + "?autoplay=1&mute=1"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        >
        </iframe>
    </div>
  )
}

export default VideoBackground