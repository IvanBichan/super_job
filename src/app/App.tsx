import React, { useEffect } from "react";
import s from "app/App.module.css";
import { Header } from "features/header/Header";
import { CircularIndeterminate } from "common/loader/Loader";
import { PagesRoute } from "features/pages/PagesRoute";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { appThunk } from "app/app.slice";

function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const user = useAppSelector((state) => state.app.userData);
  const isAppInitialized = useAppSelector(
    (state) => state.app.isAppInitialized
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appThunk.login());
  }, []);

  return (
    <div className={s.App}>
      <Header />
      {isLoading ? <CircularIndeterminate /> : ""}
      {isAppInitialized ? <PagesRoute /> : ""}
      {/*  <PagesRoute />*/}
    </div>
  );
}

export default App;
