import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GptMovieSuggestions = () => {
  const { seachedMovieNames,gptMovieResults} = useSelector((store) =>store.Gpt);
  if(seachedMovieNames === null) return ;

  return (
    <div className='px-4 bg-black text-white'>
      {seachedMovieNames.map((movieName,index) => (
        <MovieList 
           key={movieName}
           title={movieName} 
           movies={gptMovieResults[index]}
        />
      ))
      }
    </div>
  )
}

export default GptMovieSuggestions