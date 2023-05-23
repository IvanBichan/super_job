import React from "react";
import { Route, Routes } from "react-router-dom";
import { Vacancies } from "features/vacancies/Vacancies";
import { FavoritesJobs } from "features/favorites.jobs/FavoritesJobs";

export const PagesRoute = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Vacancies />} />
      <Route path={"/vacancies"} element={<Vacancies />} />
      <Route path={"/favorites"} element={<FavoritesJobs />} />
    </Routes>
  );
};
