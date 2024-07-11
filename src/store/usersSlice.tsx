import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { func } from "prop-types";
import { number } from "yargs";
import { User } from "../pages/types";

interface usersState {
  users: any[];
  isFetched: boolean;
}

const initialState: usersState = {
  users: [],
  isFetched: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    replaceUsers(state, action: PayloadAction<any[]>) {
      state.users = action.payload;
    },
    setFetched(state) {
      state.isFetched = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchData.fulfilled,
      (state, action: PayloadAction<any[]>) => {
        state.users = action.payload;
        state.isFetched = true;
      }
    );
  },
});

export const fetchData = createAsyncThunk(
  "users/fetchData",
  async (numberOfResults: number) => {
    const response = await fetch(
      "https://randomuser.me/api?results=" + numberOfResults
    );
    const usersData = await response.json();
    console.log("fetching...");
    console.log(usersData.results);
    return usersData.results;
  }
);

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
