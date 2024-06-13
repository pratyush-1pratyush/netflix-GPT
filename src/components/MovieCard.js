import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/Constants';
import { Link } from 'react-router-dom';
import { UseDispatch } from 'react-redux';
import { addClickedMovieId } from '../utils/moviesSlice';


const MovieCard = ({keyId,posterPath}) => {
  
  
 if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48'>
      
     <Link to="/player"> <img className="pr-6"src={IMG_CDN_URL + posterPath} alt="poster"></img> </Link>
     
    </div>
  )
}

export default MovieCard;