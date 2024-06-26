import React from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react';

const MovieList = ({title,movies}) => {
   
 // const disapatch = useDispatch();

    //const current = movies[0];


      
  return (
    <div className=''>
    <h1 className='text-lg md:text-3xl mt-4 mb-2 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll no-scrollbar '>
        
        <div className='flex  '>
         
        { movies?.map((movie) =>  <MovieCard key={movie.id} posterPath={movie.poster_path}/>)} 
         
          
        </div>
    </div>
    console.log(movies,"info")  ;
    </div>
  )
}

export default MovieList;