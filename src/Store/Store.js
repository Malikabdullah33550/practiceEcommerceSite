import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice/UserSlice";

const Store = configureStore({
  reducer: {
    UserSlice: UserSlice,
  },
});

export default Store;
