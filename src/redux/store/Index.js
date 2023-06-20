import { configureStore } from "@reduxjs/toolkit";
import apidata from "./ slices/Apidata";
const store = configureStore({
  reducer: {
    apidata: apidata,
  },

  devTools: true,
});

export default store;
