import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { updateUsers, changeAuthentication, randomNumber } from "./userSlice";
export const signUp = createAsyncThunk("user/signUp", async (action, thunk) => {
  try {
    const { firstname, surname, username, password } = action;
    const { user } = thunk.getState();
    if (firstname && surname && username && password) {
      const newUser = {
        id: randomNumber(1, 10),
        firstname,
        surname,
        username,
        password,
      };
      //make sure the last object in the list ends with a comma for some weird reasons JSON stringify doesn't work without it sometimes**
      const update = [...user.allUsers, newUser];
      await AsyncStorage.setItem("users", JSON.stringify(update));
      thunk.dispatch(updateUsers(newUser));
      thunk.dispatch(
        changeAuthentication({ authenticated: true, currentUser: newUser })
      );
    }
  } catch (e) {
    console.log(e);
  }
});

export const initialLoad = createAsyncThunk(
  "user/initialLoad",
  async (_, thunk) => {
    try {
      const response = await AsyncStorage.getItem("users");
      thunk.dispatch(updateUsers(JSON.parse(response)));
      console.log(JSON.parse(response));
    } catch (e) {
      console.log("failed");
      thunk.dispatch(updateUsers([]));
    }
  }
);
