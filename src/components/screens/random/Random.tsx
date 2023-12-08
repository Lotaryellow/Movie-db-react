import { useEffect, useState } from "react";
import { RandomService } from "../../../services/randomService";
import { IMovie } from "../../../types/movies";
import RandomCard from "./random-card/RandomCard";
import { createLocalStorageRandom } from "../../../utils/localStorage";
import Navigation from "../../navigation-panel/Navigation";

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
      {randomData.map((item: IMovie) => (
        <RandomCard key={item.kinopoiskId} itemData={item} />
      ))}
    </>
  );
};
export default Random;
