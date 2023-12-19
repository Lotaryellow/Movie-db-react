import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { TopService } from "../../services/topService";
import { ITop } from "../../types/movies";
import TopCard from "./top-card/TopCard";
import Navigation from "../../components/navigation-panel/Navigation";

const TopPage = (): JSX.Element => {
  const [topInfo, setTopInfo] = useState<Array<ITop>>([]);

  const url = useLocation();
  const urlName: string = url.pathname.replace("/top/", "");

  useEffect(() => {
    const fetchData = async () => {
      const response = await TopService.getTop(urlName);
      setTopInfo(response.data.items);
    };
    fetchData();
  }, [urlName]);

  return (
    <>
      <Navigation />
      {topInfo.map((film: ITop) => (
        <>
          <TopCard key={film.kinopoiskId} item={film} />;
        </>
      ))}
    </>
  );
};
export default TopPage;
