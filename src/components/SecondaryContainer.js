import React from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector((store) => store.movies)
  console.log(movies.nowPlayingMovies,"now playimg hai ji")
  console.log(movies.popularVideo,"popular hai ji");
 
  return (
    <div className="bg-black">
      <div className='-mt-52 pl-12 relative z-20'>
      <MovieList className="" title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList className="" title={"Top Rated"}  movies={movies?.topRatedMovies}/>
      <MovieList className="" title={"Upcoming"}  movies={movies?.upcomingMovies}/>
      <MovieList className="" title={"Popular"}  movies={movies?.popularVideo}/>
      </div>
    </div>
  )
}

export default SecondaryContainer