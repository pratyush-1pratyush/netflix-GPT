import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux';

const MovieList = ({title,movies}) => {
   
    //const current = movies[0];
  return (
    <div className=''>
    <h1 className='text-white mt-4 mb-2'>{title}</h1>
    <div className='flex overflow-x-scroll no-scrollbar '>
        
        <div className='flex  '>
         
        { movies?.map((movie) =>  <MovieCard key={movie.id} posterPath={movie.poster_path}/>)}       
        </div>
    </div>
    </div>
  )
}

export default MovieList