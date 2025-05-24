import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducers  from "./movieSlice"

const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducers,
        }
    }
)
 export default appStore;
