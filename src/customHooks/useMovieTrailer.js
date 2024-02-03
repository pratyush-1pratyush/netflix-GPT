import  { useEffect } from 'react'
import { addTrailerVideo } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/Constants';
import { useDispatch } from 'react-redux';

const  useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    // console.log(trailerVideo,"trailervideo");
     
    
     //console.log(Array.isArray(trailerVideo),"yes is aaray");
    // console.log(trailerVideo[0]?.key);
 
 
     const getMoviesVideo = async () => {
         const data = await fetch ("https://api.themoviedb.org/3/movie/"+ movieId +"/videos",
         API_OPTIONS
         );
         const json = await data.json();
         //console.log(json,"this is json");
 
         const trailer = json.results.filter((video) => video.name === "Official Trailer");
        // console.log(trailer,"this is trailer");
         dispatch(addTrailerVideo(trailer));
        
        
        
     };
 
     useEffect(() => {
         getMoviesVideo();
     },[]);
 
}

export default  useMovieTrailer;