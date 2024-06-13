import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openAI';
import { API_OPTIONS } from '../utils/Constants';
import { addGptMoviesResults } from '../utils/GptSearchSlice';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langkey = useSelector((store) => store.langConfig.lang)
 // console.log(langkey);
  const dispatch = useDispatch();

  const callTmdbMovieApi = async(movie) => {
    const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" 
      +movie+
      "&include_adult=false&language=en-US&page=1",
    API_OPTIONS
    );
      const json=await data.json();

      return json.results;
  }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value,"gpt search txt");

    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + 
                      searchText.current.value + 
                     ".only give me name of 5 movies, comma seperated like the example results given ahead. Example Results: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo',
      });

      const gptMovies =  gptResults?.choices[0]?.message.content.split(",");
      //console.log(gptMovies);

      const promiseArray = gptMovies.map((movie) => callTmdbMovieApi(movie));
      //[Promise, Promise, Promise, Promise, Promise]

      const tmdbResults = await Promise.all(promiseArray);
      //console.log(tmdbResults);
      dispatch(addGptMoviesResults({seachedMovieNames:gptMovies,gptMovieResults:tmdbResults}))
     
    }
  
  return (
    <div className='pt-[45%] md:pt-[10%] flex justify-center'>
       <form onSubmit={(e) => e.preventDefault()}
       className='w-full  md:w-1/2 bg-black grid grid-cols-12'>
          <input 
            ref={searchText}
            className='p-4 m-4 col-span-9' 
            type="text" 
            placeholder={lang[langkey].gptSearchPlaceholder}
          >
          </input>
          <button 
            onClick={handleGptSearchClick}
            className='text-white m-4 py-2 px-4 col-span-3 bg-red-700 rounded-lg'>
            {lang[langkey].search}
          </button>
        </form>
    </div>
  )
}

export default GptSearchBar