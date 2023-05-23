import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { appReducer } from "app/app.slice";
import { vacanciesReducer } from "features/vacancies/vacancies.slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    vacancies: vacanciesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
