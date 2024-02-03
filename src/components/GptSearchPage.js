import React from 'react'
import GptSearchBar from './GptSearchBar'
import { Bg_Netflix } from '../utils/Constants'

const GptSearchPage = () => {
  return (
    <div>
        <div className='absolute -z-20'>
            <img className=""src={Bg_Netflix}
             alt="bg_img"/>
        </div>
       <GptSearchBar/>
    </div>
  )
}

export default GptSearchPage