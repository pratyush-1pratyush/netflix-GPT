import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies} from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const isTopRatedMovies = useSelector((store) => store.movies.topRatedMovies)
    
    const getTopRatedMovies = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",API_OPTIONS)
    const json = await data.json();
    console.log(json.results);
    dispatch(addTopRatedMovies(json.results))
  }

  useEffect(() => {
    getTopRatedMovies();
  },[]);
}

export default useTopRatedMovies;