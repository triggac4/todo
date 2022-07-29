import { createSlice } from "@reduxjs/toolkit";

initialState = {
  currentUser: null,
  isLoggedIn: false,
  isLoading: false,
  allUsers: [
    {
      id: 1,
      name: "John",
      surname: "Doe",
      username: "kene3055",
      password: "Password123",
    },
  ],
};
const userSlice = createSlice({
  name: "user",
  initialState,
});


export default userSlice.reducer;