import { useEffect, useState } from "react";
import { RandomService } from "../../services/randomService";
import { IMovie } from "../../types/movies";
import RandomCard from "../../components/random-card/RandomCard";
import { createLocalStorageRandom } from "../../utils/localStorage";
import Navigation from "../../components/navigation-panel/Navigation";
import styles from "./Random.module.css";

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
          <RandomCard key={item.kinopoiskId} itemData={item} />
        ))
      ) : (
        <span className={styles.error}>Нет данных</span>
      )}
    </>
  );
};
export default Random;
