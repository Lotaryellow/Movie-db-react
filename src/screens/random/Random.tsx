import Navigation from "../../components/navigation-panel/Navigation";
import Notification from "../../components/notification/Notification";
import FullSpinner from "../../components/full-spinner/MyFullSpinner";
import { createLocalStorageRandom } from "../../utils/localStorage";
import RandomCard from "../../components/block-list/BlockListCard";
import { RandomService } from "../../services/randomService";
import responseServer from "../../utils/responseServer";
import { useEffect, useState } from "react";
import { IMovie } from "../../types/movies";

const Random = (): JSX.Element => {
  const [randomData, setRandomData] = useState<Array<IMovie>>([]);
  const [loaderSpinner, setLoaderSpinner] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const randomLocalStorage = localStorage.getItem("random");
  useEffect(() => {
    if (
      typeof randomLocalStorage === "string" &&
      JSON.parse(randomLocalStorage).saveTime ==
        new Date().toJSON().split("T")[0]
    ) {
      setRandomData(JSON.parse(randomLocalStorage).data);
    } else {
      const fetchData = async () => {
        setLoaderSpinner(true);
        const response = await RandomService.getRandom();
        if (typeof response === "string") {
          setError(response);
        } else {
          setRandomData(response);
          createLocalStorageRandom("random", response);
          setLoaderSpinner(false);
        }
        setTimeout(() => {
          setError("");
        }, 7000);
      };
      fetchData();
    }
  }, [randomLocalStorage]);

  return (
    <>
      <Navigation />

      {randomData.length > 0 ? (
        randomData.map((item: IMovie) => (
          <RandomCard key={item.kinopoiskId} item={responseServer(item)} />
        ))
      ) : (
        <Notification text={error} />
      )}

      {randomData.length == 0 && <FullSpinner loading={loaderSpinner} />}
    </>
  );
};
export default Random;
