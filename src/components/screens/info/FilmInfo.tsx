import { FilmInfoService } from "../../../services/filmInfoService";
import { useEffect, useState } from "react";
import { IMovie } from "../../../types/movies";
import InfoCard from "./info-card/InfoCard";

const FilmInfo = (): JSX.Element => {
  const [filmInfo, setFilmInfo] = useState<IMovie>(Object);

  useEffect(() => {
    const url: string = window.location.pathname;
    const urlID: string = url.replace(/\D/g, "");

    const fetchData = async () => {
      const response = await FilmInfoService.getInfo(urlID);

      setFilmInfo(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <InfoCard item={filmInfo} />
    </>
  );
};
export default FilmInfo;
