import Navigation from "../../components/navigation-panel/Navigation";
import BlockListCard from "../../components/block-list/BlockListCard";
import FullSpinner from "../../components/full-spinner/MyFullSpinner";
import Notification from "../../components/notification/Notification";
import { FilmInfoService } from "../../services/filmInfoService";
import responseServer from "../../utils/responseServer";
import { useLocation } from "react-router-dom";
import Cast from "../../components/cast/Cast";
import { useEffect, useState } from "react";
import { IMovie } from "../../types/movies";
import styles from "./FilmInfo.module.css";

const FilmInfo = (): JSX.Element => {
  const [filmInfo, setFilmInfo] = useState<IMovie | null>(null);
  const [loaderSpinner, setLoaderSpinner] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const url = useLocation();
  const urlID: string = url.pathname.replace(/\D/g, "");

  useEffect(() => {
    const fetchData = async () => {
      setLoaderSpinner(true);
      const response = await FilmInfoService.getInfo(urlID);
      if (typeof response === "string") {
        setError(response);
      } else if (response != undefined) {
        setFilmInfo(response);
        setLoaderSpinner(false);
      }
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
      {filmInfo != null && (
        <>
          <BlockListCard item={responseServer(filmInfo)} />
          <div className={styles.actorBlock}>
            <button className={styles.btnActor} onClick={showActors}>
              Посмотреть список актеров
            </button>
            {show == true && <Cast />}
          </div>
        </>
      )}
      {filmInfo === null && (
        <div className={styles.spinner}>
          <FullSpinner loading={loaderSpinner} />
          <Notification text={error} />
        </div>
      )}
    </>
  );
};
export default FilmInfo;
