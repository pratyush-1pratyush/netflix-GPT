import React from 'react'
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/Constants';

const MovieCard = ({posterPath}) => {
 
  return (
    <div className='w-48'>
      <img className="pr-6"src={IMG_CDN_URL + posterPath} alt="poster"></img>
    </div>
  )
}

export default MovieCard;