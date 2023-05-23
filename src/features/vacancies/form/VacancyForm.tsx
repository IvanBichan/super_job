import React, { FC, useEffect } from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
} from "@mui/material";
import s from "features/vacancies/form/VacancyForm.module.css";
import { useFormik } from "formik";
import SuperSelect from "common/super.select/SuperSelect";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { vacanciesThunk } from "features/vacancies/vacancies.slice";
import { ArgForGetSpecificVacancy } from "features/vacancies/vacancies.api";

type objectVacancyType = { id: number; value: string };
type PropsType = {
  keyword: string;
};
export const VacancyForm: FC<PropsType> = ({ keyword }) => {
  const vacancies = useAppSelector((state) => state.vacancies.vacancies);
  console.log(vacancies);
  const dispatch = useAppDispatch();

  const arr2 = useAppSelector((state) => state.vacancies.typeOfProfessions);
  const arrVacancies: objectVacancyType[] = [];

  if (arr2.length) {
    arr2.forEach((el) =>
      arrVacancies.push({ id: el.key, value: el.title_rus })
    );
  }

  useEffect(() => {
    dispatch(vacanciesThunk.getTypeOfProfessions());
  }, []);

  const formik = useFormik({
    validate: (value) => {
      const errors: any = {};
      if (!value.professions) {
        console.log("value.professions  " + value.professions);
        errors.professions = "You have not selected a section";
      }
      return errors;
    },
    initialValues: {
      professions: "",
      payment_from: undefined,
      payment_to: undefined,
    },
    onSubmit: (values) => {
      const arg: ArgForGetSpecificVacancy = {
        catalogues: +values.professions,
        payment_from: values.payment_from ? values.payment_from : undefined,
        payment_to: values.payment_to ? values.payment_to : undefined,
        keyword: keyword ? keyword : undefined,
      };
      dispatch(vacanciesThunk.getSpecificVacancies(arg));
      formik.resetForm();
    },
  });
  return (
    <Grid container justifyContent="center">
      <Grid item xs={4}>
        <form onSubmit={formik.handleSubmit}>
          <FormControl>
            <FormLabel></FormLabel>
            <FormGroup className={s.formInput}>
              <p>Отрасль</p>

              <SuperSelect
                options={arrVacancies}
                {...formik.getFieldProps("professions")}
              />
              {formik.errors.professions ? (
                <p className={s.error}>{formik.errors.professions}</p>
              ) : (
                ""
              )}
              <p>Оклад</p>
              <TextField
                data-element={"salary-from-input"}
                type="number"
                label="От"
                margin="normal"
                {...formik.getFieldProps("payment_from")}
                inputProps={{
                  step: "1000",
                }}
              />
              <TextField
                data-element={"salary-to-input"}
                type="number"
                {...formik.getFieldProps("payment_to")}
                label="До"
                margin="normal"
                inputProps={{
                  step: "1000",
                }}
              />

              <Button
                data-element={"search-button"}
                type={"submit"}
                variant={"contained"}
                color={"primary"}
                className={s.button}
              >
                Применить
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Grid>
    </Grid>
  );
};
