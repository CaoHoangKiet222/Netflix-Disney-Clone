import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user",
   initialState: {
      name: '',
      email: '',
      photo: ''
   },
   reducers: {
      login(state, action) {
         state.name = action.payload.name;
         state.email = action.payload.email;
         state.photo = action.payload.photo;
      },
      logout(state) {
         state.name = null;
         state.email = null;
         state.photo = null;
      }
   }
})

export const userActions = userSlice.actions;

export default userSlice.reducer;
