import { configureStore } from "@reduxjs/toolkit";
import stoner from "./slices/stonerSlice";

const store = configureStore({
  reducer: {
    stoner,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
