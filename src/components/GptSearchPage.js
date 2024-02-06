import React from 'react'
import GptSearchBar from './GptSearchBar'
import { Bg_Netflix } from '../utils/Constants'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearchPage = () => {
  return (
    <>
      <div className='fixed  -z-10 '>
            <img className=" h-screen w-screen object-cover"src={Bg_Netflix}
             alt="bg_img"/>
      </div>
        
      <div className=''>
          <GptSearchBar/>
          <GptMovieSuggestions/>
      </div>
    </>
    
  )
}

export default GptSearchPage