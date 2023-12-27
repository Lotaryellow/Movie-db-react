import Navigation from "../../components/navigation-panel/Navigation";
import BlockListCard from "../../components/block-list/BlockListCard";
import { createLocalStorage } from "../../utils/localStorage";
import responseServer from "../../utils/responseServer";
import { TopService } from "../../services/topService";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ITop } from "../../types/movies";

const TopPage = (): JSX.Element => {
  const [topInfo, setTopInfo] = useState<Array<ITop>>([]);

  const url = useLocation();
  const urlName: string = url.pathname.replace("/top/", "");

  const topLocalStorage = localStorage.getItem(`${urlName}`);
  useEffect(() => {
    if (
      typeof topLocalStorage === "string" &&
      JSON.parse(topLocalStorage).saveTime == new Date().toJSON().split("T")[0]
    ) {
      setTopInfo(JSON.parse(topLocalStorage).data);
    } else {
      const fetchData = async () => {
        const response = await TopService.getTop(urlName.toUpperCase());
        setTopInfo(response.data.items);
        createLocalStorage(`${urlName}`, response.data.items);
      };
      fetchData();
    }
  }, [topLocalStorage, urlName]);

  return (
    <>
      <Navigation />
      {topInfo.map((film: ITop) => (
        <BlockListCard key={film.kinopoiskId} item={responseServer(film)} />
      ))}
    </>
  );
};
export default TopPage;
