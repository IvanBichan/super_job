import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { vacanciesThunk } from "features/vacancies/vacancies.slice";
import { Vacancy } from "features/vacancy/Vacancy";
import { VacancyForm } from "features/vacancies/form/VacancyForm";
import s from "features/vacancies/Vacancies.module.css";
import { InputWithButtons } from "common/Input/InputWithButtons";

export const Vacancies = () => {
  const vacancies = useAppSelector((state) => state.vacancies.vacancies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(vacanciesThunk.getStartVacancies());
  }, []);

  return (
    <main className={s.Container}>
      <VacancyForm keyword={""} />
      <div>
        <div>
          <InputWithButtons />
        </div>
        {vacancies.map((v) => (
          <Vacancy
            profession={v.profession}
            payment_from={v.payment_from}
            payment_to={v.payment_to}
            type_of_work={v.type_of_work.title}
            town={v.town.title}
          />
        ))}
      </div>
    </main>
  );
};
