import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import GptSearchPage from './GptSearchPage';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import appStore from '../utils/appStore';
import useAiringTodayShows from '../customHooks/useAiringTodayShows';
import useOnTheAirShows from '../customHooks/useOnTheAirShows';
import usePopularShows from '../customHooks/usePopularShows';
import useTopRatedShows from '../customHooks/useTopRatedShows';


const Browse = () => {
  const getGptState = useSelector((store) => store.Gpt?.setGptSearch)
  //console.log(getGptState);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
 // useAiringTodayShows();
  //useOnTheAirShows();
  //usePopularShows();
  //useTopRatedShows();
  return (
    <div>
      <Header/>
      {getGptState ? <GptSearchPage/> : <><MainContainer/>
      <SecondaryContainer/></>}
      
    </div>
  )
}

export default Browse;