import React from 'react'
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addAiringTodayShows, addNowPlayingMovies, addOnTheAirShows, addPopularShows } from "../utils/moviesSlice";


const usePopularShows = () => {
  
    const dispatch = useDispatch();
   
const getPopularShows = async() => {
    const data = await fetch("https://api.themoviedb.org/3/tv/popular",API_OPTIONS)
    const json = await data.json();
    //console.log(json.results,"kyu ni hua");
    dispatch(addPopularShows(json.results))
  }

  useEffect(() => {
      getPopularShows();
  },[]);
  
}

export default usePopularShows;