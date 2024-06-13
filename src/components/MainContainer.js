import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(movies === null || movies === undefined) return;
    const mainMovie = movies[0];
    //console.log(mainMovie,"main");

    const {original_title, overview, id} = mainMovie;
    const description = overview.substring(0,200);
  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle title={original_title} overview={description}/>
        <VideoBackground movieId={id}/>
        
    </div>
  )
}

export default MainContainer;
