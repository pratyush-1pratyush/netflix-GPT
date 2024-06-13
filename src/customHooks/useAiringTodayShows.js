import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addAiringTodayShows, addNowPlayingMovies } from "../utils/moviesSlice";

const useAiringTodayShows = () => {
    const dispatch = useDispatch();
    const isAiringTodayShows = useSelector((store) => store.movies.airingTodayShows)
const getNowAiringShows = async() => {
    const data = await fetch("https://api.themoviedb.org/3/tv/airing_today",API_OPTIONS)
    const json = await data.json();
    //console.log(json.results,"kyu ni hua");
    dispatch(addAiringTodayShows(json.results))
  }

  useEffect(() => {
      getNowAiringShows();
  },[]);
}

export default useAiringTodayShows;