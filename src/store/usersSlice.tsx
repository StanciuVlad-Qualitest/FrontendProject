import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { func } from "prop-types";
import { number } from "yargs";
import { User } from "../pages/types";

interface usersState {
  users: any[];
  isFetching: boolean;
  isFetched: boolean;
  error: string | null;
}

const initialState: usersState = {
  users: [],
  isFetching: false,
  isFetched: false,
  error: null,
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
    builder
      .addCase(fetchData.pending, (state) => {
        state.isFetching = true;
        console.log("Fetching data...");
      })
      .addCase(fetchData.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.users = action.payload;
        state.isFetched = true;
        state.isFetching = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isFetching = false;
        state.isFetched = false;
        state.error = action.error.message || "Unknown error occurred";
        console.error("Error fetching data:", action.error.message);
      });
  },
});

export const fetchData = createAsyncThunk(
  "users/fetchData",
  async (numberOfResults: number) => {
    const response = await fetch(
      "https://randomuser.me/api?results=" + numberOfResults
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const usersData = await response.json();
    console.log(usersData.results);
    return usersData.results;
  }
);

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
