import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const GptMovieSuggestions = () => {
  const { seachedMovieNames,gptMovieResults} = useSelector((store) =>store.Gpt);
  if(seachedMovieNames === null) return ;

  return (
    <div className=' bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg")] text-white'>
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