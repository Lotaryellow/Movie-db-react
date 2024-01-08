import Navigation from "../../components/navigation-panel/Navigation";
import Notification from "../../components/notification/Notification";
import { createLocalStorageRandom } from "../../utils/localStorage";
import RandomCard from "../../components/block-list/BlockListCard";
import { RandomService } from "../../services/randomService";
import responseServer from "../../utils/responseServer";
import { useEffect, useState } from "react";
import { IMovie } from "../../types/movies";

const Random = (): JSX.Element => {
  const [randomData, setRandomData] = useState<Array<IMovie>>([]);

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
        const response = await RandomService.getRandom();
        setRandomData(response);
        createLocalStorageRandom("random", response);
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
        <Notification />
      )}
    </>
  );
};
export default Random;
