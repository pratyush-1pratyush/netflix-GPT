import React from 'react'
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addAiringTodayShows, addNowPlayingMovies, addOnTheAirShows } from "../utils/moviesSlice";


const useOnTheAirShows = () => {
  
    const dispatch = useDispatch();
    const isOnTheAirShows = useSelector((store) => store.movies.onTheAirShows)
const getOnTheAirShows = async() => {
    const data = await fetch("https://api.themoviedb.org/3/tv/on_the_air",API_OPTIONS)
    const json = await data.json();
  //  console.log(json.results,"kyu ni hua");
    dispatch(addOnTheAirShows(json.results))
  }

  useEffect(() => {
      getOnTheAirShows();
  },[]);
  
}

export default useOnTheAirShows