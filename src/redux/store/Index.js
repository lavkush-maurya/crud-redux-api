import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./ slices/UserSlice";
import apidata from "./ slices/Apidata";
const store = configureStore({
  reducer: {
    user: userSlice,
    apidata: apidata,
  },

  devTools: true,
});

export default store;
