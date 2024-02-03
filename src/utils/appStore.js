import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import toggleGpt from "./GptSearchSlice"
import langChange from "./langConfigSlice"

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer, 
        Gpt : toggleGpt,
        langConfig :  langChange
    }
})

export default appStore;