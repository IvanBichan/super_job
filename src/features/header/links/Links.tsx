import { FC } from "react";
import { NavLink } from "react-router-dom";

type LinksPropsType = {
  handleClose?: () => void;
  className: string;
};

export const Links: FC<LinksPropsType> = ({ handleClose, className }) => {
  return (
    <>
      <NavLink
        to="/vacancies"
        className={({ isActive }) => (isActive ? className : "")}
        onClick={handleClose}
      >
        Поиск Вакансий
      </NavLink>
      <NavLink
        to="/favorites"
        className={({ isActive }) => (isActive ? className : "")}
        onClick={handleClose}
      >
        Избранное
      </NavLink>
    </>
  );
};
