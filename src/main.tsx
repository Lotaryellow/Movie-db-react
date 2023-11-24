import React from "react";
import ReactDOM from "react-dom/client";
import Premieres from "./components/screens/main/premieres/Premieres";
import DigitalReleases from "./components/screens/main/digital-releases/DigitalReleases";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <Premieres />
      <DigitalReleases />
      <h1 className="news">Новые материалы в разработке</h1>
    </>
  </React.StrictMode>
);
