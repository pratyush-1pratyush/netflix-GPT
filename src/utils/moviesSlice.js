import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:[],
        clickedMovieId:[],
        popularVideo:[],
        topRatedMovies:[],
        upcomingMovies: [],
        airingTodayShows:[],
        onTheAirShows:[],
        popularShows:[],
        topRatedShows:[],
    },
    reducers:{
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state,action) => {
            state.trailerVideo = action.payload;
        },
        addClickedMovieId : (state,action) => {
            state.clickedMovieId = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popularVideo = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state,action) => {
            state.upcomingMovies = action.payload;
        },
        addAiringTodayShows : (state,action) => {
            state.airingTodayShows = action.payload;
        },
        addOnTheAirShows : (state,action) => {
            state.onTheAirShows = action.payload;
        },
        addPopularShows : (state,action) => {
            state.popularShows = action.payload;
        },
        addTopRatedShows : (state,action) => {
            state.topRatedShows = action.payload;
        },
    }

});

export const { addNowPlayingMovies, addTrailerVideo,addClickedMovieId, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addAiringTodayShows, addOnTheAirShows, addPopularShows, addTopRatedShows } = moviesSlice.actions;

export default moviesSlice.reducer;