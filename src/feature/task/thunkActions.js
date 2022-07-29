import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utility/api";


export const getAllTask = createAsyncThunk(
  "task/getAllTask",
  async (action, thunk) => {
    try{
    const response = await axios.get("/todos");
    const data = response.data;
    return data;
    }catch(error){
        console.log(error);
        return error;
    }
  }
);
