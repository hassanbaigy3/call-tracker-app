import { CallType } from "../../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CallState = {};

const userSlice = createSlice({
  name: "user",
  initialState: { accessToken: null, refreshToken: null, user: null } as CallState,
  reducers: {
    setCurrentUser: (
      state,
      {
        payload: { accessToken, refreshToken, user },
      }: PayloadAction<{ accessToken: String | null; refreshToken: String | null; user: CallType | null }>
    ) => {},
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
