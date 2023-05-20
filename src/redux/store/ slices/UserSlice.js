import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      console.log("hiii", action.payload);
      state.splice(action.payload, 1);
    },
    deleteAllUsers(state, action) {
      return (state = []);
    },
  },
});

console.log("Actions of userSlice", userSlice);
export const { addUser, removeUser, deleteAllUsers } = userSlice.actions;
export default userSlice.reducer;
