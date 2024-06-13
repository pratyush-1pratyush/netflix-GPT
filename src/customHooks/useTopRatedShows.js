import React from 'react'
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addAiringTodayShows, addNowPlayingMovies, addOnTheAirShows, addPopularShows, addTopRatedShows } from "../utils/moviesSlice";


const useTopRatedShows = () => {
  
    const dispatch = useDispatch();
   
const getTopRatedShows = async() => {
    const data = await fetch("https://api.themoviedb.org/3/tv/popular",API_OPTIONS)
    const json = await data.json();
   // console.log(json.results,"kyu ni hua");
    dispatch(addTopRatedShows(json.results))
  }

  useEffect(() => {
      getTopRatedShows();
  },[]);
  
}



export default useTopRatedShows;