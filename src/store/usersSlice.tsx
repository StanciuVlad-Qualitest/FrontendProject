import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { func } from "prop-types";
import { number } from "yargs";

interface usersState {
  users: any;
  isFetching: boolean;
}

const initialState: usersState = {
  users: [],
  isFetching: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    replaceUsers(state, action: PayloadAction<any>) {
      state.users = action.payload;
      state.isFetching = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      usersActions.replaceUsers(action);
    });
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
    console.log(usersData);
    return usersData;
  }
);

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
