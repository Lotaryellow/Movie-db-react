import Navigation from "../../components/navigation-panel/Navigation";
import BlockListCard from "../../components/block-list/BlockListCard";
import { FilmInfoService } from "../../services/filmInfoService";
import responseServer from "../../utils/responseServer";
import { useLocation } from "react-router-dom";
import Cast from "../../components/cast/Cast";
import { useEffect, useState } from "react";
import { IMovie } from "../../types/movies";
import styles from "./FilmInfo.module.css";

const FilmInfo = (): JSX.Element => {
  const [filmInfo, setFilmInfo] = useState<IMovie>(Object);

  const url = useLocation();
  const urlID: string = url.pathname.replace(/\D/g, "");

  useEffect(() => {
    const fetchData = async () => {
      const response = await FilmInfoService.getInfo(urlID);
      setFilmInfo(response);
    };
    fetchData();
  }, [urlID]);

  const [show, setShow] = useState<boolean>(false);
  const showActors = () => {
    setShow(!show);
  };
  return (
    <>
      <Navigation />
      <BlockListCard item={responseServer(filmInfo)} />
      <div className={styles.actorBlock}>
        <button className={styles.btnActor} onClick={showActors}>
          Посмотреть список актеров
        </button>
        {show == true && <Cast />}
      </div>
    </>
  );
};
export default FilmInfo;
