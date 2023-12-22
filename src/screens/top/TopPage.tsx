import Navigation from "../../components/navigation-panel/Navigation";
import BlockListCard from "../../components/block-list/BlockListCard";
import responseServer from "../../utils/responseServer";
import { TopService } from "../../services/topService";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ITop } from "../../types/movies";

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
        <BlockListCard key={film.kinopoiskId} item={responseServer(film)} />
      ))}
    </>
  );
};
export default TopPage;
