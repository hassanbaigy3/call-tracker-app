import { UserType } from "../../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  accessToken: String | null;
  refreshToken: String | null;
  user: UserType | null;
};

const userSlice = createSlice({
  name: "user",
  initialState: { accessToken: null, refreshToken: null, user: null } as UserState,
  reducers: {
    setCurrentUser: (
      state,
      {
        payload: { accessToken, refreshToken, user },
      }: PayloadAction<{ accessToken: String | null; refreshToken: String | null; user: UserType | null }>
    ) => {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.user = user;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
