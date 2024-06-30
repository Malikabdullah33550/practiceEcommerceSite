import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedInDetails: null,
};
const reducers = {
  updateLoginStatus: (state, action) => {
    state.loggedInDetails = action.payload;
  },
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers,
});

export default UserSlice.reducer;
export const { updateLoginStatus } = UserSlice.actions;
