import React from "react";
import s from "features/header/Header.module.css";
import { Links } from "features/header/links/Links";

export const Header = () => {
  return (
    <header className={s.header}>
      <Links className={s.active} />
    </header>
  );
};
