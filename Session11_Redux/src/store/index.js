import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../redux/slices/counterSlice";
import userSlice from "../redux/slices/userSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
});
