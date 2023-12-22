import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActorCard from "../screens/actors/ActorCard";
import FilmInfo from "../screens/info/FilmInfo";
import Random from "../screens/random/Random";
import TopPage from "../screens/top/TopPage";
import styles from "./Router.module.css";
import Main from "../screens/main/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Random />} path="/random" />
        <Route element={<FilmInfo />} path="/info/:id?" />
        <Route element={<ActorCard />} path="/actor/:id?" />
        <Route element={<TopPage />} path="/top/:name?" />
        <Route
          path="*"
          element={<div className={styles.error}>ОШИБОЧКА</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
