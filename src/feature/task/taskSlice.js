import { createSlice } from "@reduxjs/toolkit";
import { getAllTask } from "./thunkActions";

const initialState = {
  tasks: [],
  isLoading: false,
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  extraReducers: {
    [getAllTask.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export default taskSlice.reducer;
