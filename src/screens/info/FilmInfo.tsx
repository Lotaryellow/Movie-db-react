import { FilmInfoService } from "../../services/filmInfoService";
import { useEffect, useState } from "react";
import { IMovie } from "../../types/movies";
import InfoCard from "../../components/info-card/InfoCard";
import { useLocation } from "react-router-dom";
import Navigation from "../../components/navigation-panel/Navigation";

const FilmInfo = (): JSX.Element => {
  const [filmInfo, setFilmInfo] = useState<IMovie>(Object);

  const url = useLocation();
  const urlID: string = url.pathname.replace(/\D/g, "");

  useEffect(() => {
    const fetchData = async () => {
      const response = await FilmInfoService.getInfo(urlID);
      setFilmInfo(response.data);
    };
    fetchData();
  }, [urlID]);

  return (
    <>
      <Navigation />
      <InfoCard item={filmInfo} />
    </>
  );
};
export default FilmInfo;
