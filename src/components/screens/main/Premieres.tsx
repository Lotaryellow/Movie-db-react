import { Swiper, SwiperSlide } from "swiper/react";
import { IPremier } from "../../../types/movies.ts";
import { useState, useEffect } from "react";
import "swiper/css";
import styles from "./Premieres.module.css";
import PremiereCard from "./movie-card/PremiereCard.tsx";
import { createLocalStorage } from "../../../utils/localStorage.ts";
import { PremierService } from "../../../services/premierService.ts";

const Premeres = (): JSX.Element => {
  const [premiersData, setPremiersData] = useState(Array<IPremier>);
  const premieresLocalStorage = localStorage.getItem("premieres");
  useEffect(() => {
    if (
      typeof premieresLocalStorage === "string" &&
      JSON.parse(premieresLocalStorage).saveTime ==
        new Date().toJSON().split("T")[0]
    ) {
      setPremiersData(JSON.parse(premieresLocalStorage).data);
    } else {
      const fetchData = async () => {
        const response = await PremierService.getPremier();
        setPremiersData(response.data.items);
        createLocalStorage("premieres", response.data.items);
      };
      fetchData();
    }
  }, [premieresLocalStorage]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Премьеры этого месяца</h1>
      <div className={styles.swiper}>
        <Swiper
          spaceBetween={30}
          slidesPerView={7}
          loop={true}
          grab-cursor="true"
        >
          {premiersData.length > 0
            ? premiersData.map((item: IPremier) => (
                <SwiperSlide key={item.kinopoiskId}>
                  <PremiereCard item={item} />
                </SwiperSlide>
              ))
            : "нет данных"}
        </Swiper>
      </div>
    </div>
  );
};

export default Premeres;
