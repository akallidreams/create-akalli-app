import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "./types";

export const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, tokens: {} },
  reducers: {
    login: (state: IAuthState) => {
      state.isLoggedIn = true;
    },
  },
});
