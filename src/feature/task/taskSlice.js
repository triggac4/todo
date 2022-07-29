import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    isLoading: false,
}
const taskSlice = createSlice({
    name: "task",
    initialState,
});

export default taskSlice.reducer;