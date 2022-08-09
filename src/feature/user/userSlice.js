import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const randomNumber = (start, end) => {
  return Math.floor(Math.random() * (end + 1) + start);
};
initialState = {
  authenticated: false,
  currentUser: null,
  isLoading: false,
  allUsers: [
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
      console.log(state?.allUsers)
      const user = state?.allUsers?.find((user) => {
        return (
          user.username === action.payload.username &&
          user.password === action.payload.password
        );
      });
      if (user) {
        state.authenticated = true;
        state.currentUser = user;
      }
    },
    updateUsers: (state, action) => {
      state.allUsers=action.payload;
    },
    changeAuthentication: (state, action) => {
      state.authenticated = action.payload?.authenticated;
      state.currentUser = action.payload?.currentUser;
    },
  },
});
export const { logIn, updateUsers, changeAuthentication, initialLoad } =
  userSlice.actions;
export default userSlice.reducer;
