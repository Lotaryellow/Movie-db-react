import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components/screens/main/Main";
import Random from "../components/screens/random/Random";
import FilmInfo from "../components/screens/info/FilmInfo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Random />} path="/random" />
        <Route element={<FilmInfo />} path="/info/:id?" />

        <Route path="*" element={<div>ОШИБОЧКА</div>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
