import  { useEffect } from 'react'
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch, useSelector } from 'react-redux';

const  useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const istrailerVideo = useSelector((store) => store.movies.trailerVideo)
    // console.log(trailerVideo,"trailervideo");
     
    
     //console.log(Array.isArray(trailerVideo),"yes is aaray");
    // console.log(trailerVideo[0]?.key);
 
 
     const getMoviesVideo = async () => {
         const data = await fetch ("https://api.themoviedb.org/3/movie/"+ movieId +"/videos",
         API_OPTIONS
         );
         const json = await data.json();
         console.log(json,"this is json now");
 
         const trailer = json.results.filter((video) => (video.type).includes("Trailer"));
         console.log(trailer,"jo hai yahi trailer hai");
         const key = trailer[0].key;
         dispatch(addTrailerVideo(key));
        
        
        
     };
 
     useEffect(() => {
        getMoviesVideo();
     },[]);
 
}

export default  useMovieTrailer;