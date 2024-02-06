import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name:"Gpt",
    initialState:{
        setGptSearch:false,
        seachedMovieNames:null,
        gptMovieResults:null
    },
    reducers:{
        toggleGptSearchView:(state) => {
            state.setGptSearch =!state.setGptSearch;
        },
        addGptMoviesResults:(state,action) => {
            const {seachedMovieNames,gptMovieResults}=action.payload;
            state.seachedMovieNames=seachedMovieNames;
            state.gptMovieResults=gptMovieResults;
        }
    }

});

export const {toggleGptSearchView,addGptMoviesResults} = GptSearchSlice.actions;
export default GptSearchSlice.reducer;