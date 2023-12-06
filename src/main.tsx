import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navigation from "./components/navigation-panel/Navigation";
import Premieres from "./components/screens/main/premieres/Premieres";
import DigitalReleases from "./components/screens/main/digital-releases/DigitalReleases";
import FilmInfo from "./components/screens/info/FilmInfo";
import "./index.css";
import Random from "./components/screens/random/Random";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navigation />
        <Premieres />
        <DigitalReleases />
        <h1 className="news">Новые материалы в разработке</h1>
      </div>
    ),
  },
  {
    path: "/info/:id?",
    element: (
      <>
        <Navigation />
        <FilmInfo />
      </>
    ),
    errorElement: <div>Что-то пошло не так</div>,
  },
  { path: "*", element: <div>Такой страницы не существует</div> },
  {
    path: "/random",
    element: (
      <div>
        <Navigation />
        <Random />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  </React.StrictMode>
);
