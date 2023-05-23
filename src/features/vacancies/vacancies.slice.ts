import { createSlice } from "@reduxjs/toolkit";
import {
  ArgForGetSpecificVacancy,
  ResponseTypeOfProfession,
  vacanciesApi,
  Vacancy,
} from "features/vacancies/vacancies.api";
import { createAppAsyncThunk } from "common/utils/create.app.async.thunk";

const VacanciesInitialState = {
  error: null as string | null,
  isLoading: false,
  vacancies: [] as [] | Vacancy[],
  typeOfProfessions: [] as [] | ResponseTypeOfProfession[],
};

export type InitialStateType = typeof VacanciesInitialState;

const slice = createSlice({
  name: "vacancies",
  initialState: VacanciesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStartVacancies.fulfilled, (state, action) => {
        state.vacancies = action.payload.vacancies;
      })
      .addCase(getTypeOfProfessions.fulfilled, (state, action) => {
        state.typeOfProfessions = action.payload.typeOfProfessions;
      })
      .addCase(getSpecificVacancies.fulfilled, (state, action) => {
        state.vacancies = action.payload.vacancies;
      });
  },
});

const getSpecificVacancies = createAppAsyncThunk<any, ArgForGetSpecificVacancy>(
  "vacancies/SpecificVacancies",

  async (arg, thunkAPI) => {
    const res = await vacanciesApi.getSpecificVacancy(arg);
    debugger;
    return { vacancies: res.data.objects };
  }
);

const getStartVacancies = createAppAsyncThunk(
  "vacancies/getStartVacancies",
  async (arg, thunkAPI) => {
    const res = await vacanciesApi.getVacancies();
    debugger;
    return { vacancies: res.data.objects };
  }
);

const getTypeOfProfessions = createAppAsyncThunk(
  "vacancies/getTypeOfProfessions",
  async (arg, thunkAPI) => {
    const res = await vacanciesApi.getAllTypeOfVacancies();
    return { typeOfProfessions: res.data };
  }
);

export const vacanciesReducer = slice.reducer;
export const vacanciesActions = slice.actions;
export const vacanciesThunk = {
  getStartVacancies,
  getTypeOfProfessions,
  getSpecificVacancies,
};
