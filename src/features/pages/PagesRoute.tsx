import React from "react";
import { Route, Routes } from "react-router-dom";
import { Vacancies } from "features/vacancies/Vacancies";
import { FavoritesJobs } from "features/favorites.jobs/FavoritesJobs";

export const PagesRoute = () => {
  return (
    <Routes>
      <Route path={"super_job/"} element={<Vacancies />} />
      <Route path={"super_job/vacancies"} element={<Vacancies />} />
      <Route path={"super_job/favorites"} element={<FavoritesJobs />} />
    </Routes>
  );
};
