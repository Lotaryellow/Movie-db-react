import Navigation from "../../components/navigation-panel/Navigation";
import BlockListCard from "../../components/block-list/BlockListCard";
import { createLocalStorage } from "../../utils/localStorage";
import responseServer from "../../utils/responseServer";
import { TopService } from "../../services/topService";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ITop } from "../../types/movies";
import Notification from "../../components/notification/Notification";
import FullSpinner from "../../components/full-spinner/MyFullSpinner";

const TopPage = (): JSX.Element => {
  const [topInfo, setTopInfo] = useState<Array<ITop>>([]);
  const [error, setError] = useState<string>("");
  const [loaderSpinner, setLoaderSpinner] = useState<boolean>(false);
  const url = useLocation();
  const urlName: string = url.pathname.replace("/top/", "");

  const topLocalStorage = localStorage.getItem(`${urlName}`);
  useEffect(() => {
    if (
      typeof topLocalStorage === "string" &&
      JSON.parse(topLocalStorage).saveTime == new Date().toJSON().split("T")[0]
    ) {
      setTopInfo(JSON.parse(topLocalStorage).data.items);
    } else {
      const fetchData = async () => {
        setLoaderSpinner(true);
        const response = await TopService.getTop(urlName.toUpperCase());
        if (typeof response === "string") {
          setError(response);
        } else if (response != undefined) {
          setTopInfo(response.data);
          createLocalStorage(`${urlName}`, response.data);
          setLoaderSpinner(false);
        }
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
      {loaderSpinner == true && (
        <div>
          <FullSpinner loading={loaderSpinner} />
          <Notification text={error} />
        </div>
      )}
    </>
  );
};
export default TopPage;
