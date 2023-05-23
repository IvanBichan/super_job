import React, { FC } from "react";
import s from "features/vacancy/Vacancy.module.css";

export type PropsType = {
  profession: string;
  payment_from: number;
  payment_to: number;
  type_of_work: string;
  town: string;
};

export const Vacancy: FC<PropsType> = ({
  profession,
  payment_from,
  payment_to,
  type_of_work,
  town,
}) => {
  const dataСomparison = payment_from === 0 && payment_to === 0;
  return (
    <div>
      <h2>{profession}</h2>

      <div className={s.jobInformation}>
        <div>
          {dataСomparison ? (
            <span>з/п не указана</span>
          ) : !payment_from ? (
            <span>{`з/п ${payment_to} rub`}</span>
          ) : !payment_to ? (
            <span>{`з/п от ${payment_from} rub`}</span>
          ) : (
            <span>{`з/п ${payment_from} - ${payment_to} rub`}</span>
          )}
        </div>
        <div>{type_of_work}</div>
      </div>
      <div>{town}</div>
    </div>
  );
};
