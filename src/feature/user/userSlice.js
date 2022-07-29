import { createSlice } from "@reduxjs/toolkit";

const randomNumber = (start, end) => {
  return Math.floor(Math.random() * (end + 1 )+ start);
};
initialState = {
  authenticated: false,
  currentUser: {},
  isLoading: false,
  allUsers: [
    {
      id: 1,
      firstname: "John",
      surname: "Doe",
      username: "kene3055",
      password: "Password123",
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, action) => {
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
    signUp: (state, action) => {
      const { firstname, surname, username, password } = action.payload;

      if (firstname && surname && username && password) {
        const newUser = {
          id: randomNumber(1, 10),
          firstname,
          surname,
          username,
          password,
        };

        state.allUsers.push(newUser);
        state.authenticated = true;
        state.currentUser = newUser;
        console.log(state.allUsers);
      }
    },
    logOut: (state) => {
      state.authenticated = false;
      state.currentUser = {};
    },
  },
});
export const { logIn, signUp } = userSlice.actions;
export default userSlice.reducer;
