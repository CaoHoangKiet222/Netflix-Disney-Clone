import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice({
   name: "movies",
   initialState: {
      recommend: null,
      newDisney: null,
      original: null,
      trending: null,
   },
   reducers: {
      setMovies(state, action) {
         state.recommend = action.payload.recommend;
         state.newDisney = action.payload.newDisney;
         state.original = action.payload.original;
         state.trending = action.payload.trending;
      }
   }
})

export const moviesActions = moviesSlice.actions;

export default moviesSlice.reducer;
