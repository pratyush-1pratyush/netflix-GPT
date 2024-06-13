import React from 'react'
import MovieList from './MovieList'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector((store) => store.movies)
  //console.log(movies.nowPlayingMovies,"now playimg hai ji")
  //console.log(movies.popularVideo,"popular hai ji");
 
  return (
    movies.nowPlayingMovies &&  (
    <div className="bg-black">
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
      <MovieList className="" title={"Now Playing"} movies={movies?.nowPlayingMovies} />
     {/* <MovieList className="" title={"Top Rated Shows"}  movies={movies?.topRatedShows}/> */}
      <MovieList className="" title={"Top Rated Movies"}  movies={movies?.topRatedMovies}/>
      <MovieList className="" title={"Upcoming"}  movies={movies?.upcomingMovies}/>
     {/*  <MovieList className="" title={"On The Air"}  movies={movies?.onTheAirShows}/> */}
      <MovieList className="" title={"Popular"}  movies={movies?.popularVideo}/>
     {/*  <MovieList className="" title={"Airing Today"}  movies={movies?.airingTodayShows}/> */}
     
      {/* <MovieList className="" title={"Popular Shows"}  movies={movies?.popularShows}/>  */}
    
      </div>
    </div>
    )
  )
}

export default SecondaryContainer