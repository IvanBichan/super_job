import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "common/utils/create.app.async.thunk";
import { appApi } from "app/app.api";

export type UserType = {
  access_token: string;
  refresh_token: string;
  ttl: number;
  expires_in: number;
  token_type: string;
  reg_user_resumes_count: number;
};

const appInitialState = {
  error: null as string | null,
  isLoading: true,
  isAppInitialized: false,
  userData: null as null | UserType,
};

export type InitialStateType = typeof appInitialState;

const slice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {
    setAppLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.isLoading = action.payload.isLoading;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.userData = action.payload.userData;
      state.isAppInitialized = action.payload.isAppInitialized;
    });
  },
});

const login = createAppAsyncThunk("app/login", async (arg, thunkAPI) => {
  const { dispatch } = thunkAPI;
  dispatch(appActions.setAppLoading({ isLoading: true }));
  const res = await appApi.login();
  dispatch(appActions.setAppLoading({ isLoading: false }));
  return { userData: res.data, isAppInitialized: true };
});

export const appReducer = slice.reducer;
export const appActions = slice.actions;
export const appThunk = { login };
