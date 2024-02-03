import { createSlice } from "@reduxjs/toolkit";

const GptSearchSlice = createSlice({
    name:"Gpt",
    initialState:{
        setGptSearch:false 
    },
    reducers:{
        toggleGptSearchView:(state) => {
            state.setGptSearch =!state.setGptSearch;
        }
    }

});

export const {toggleGptSearchView} = GptSearchSlice.actions;
export default GptSearchSlice.reducer;