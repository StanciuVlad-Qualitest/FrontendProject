import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import usersSlice from "./usersSlice";
export const store = configureStore({
  reducer: {
    ui: uiSlice,
    users: usersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
