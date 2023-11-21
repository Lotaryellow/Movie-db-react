import { Swiper, SwiperSlide } from "swiper/react";
import { IPremier } from "../../../types/movies.ts";
import { useState, useEffect } from "react";
import "swiper/css";
import styles from "./Premieres.module.css";
import PremiereCard from "./movie-card/PremiereCard.tsx";

const Premeres = (): JSX.Element => {
  const [premiers, setPremiers] = useState(Array<IPremier>);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2022&month=JANUARY",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": "bdad076f-fc67-4b17-952b-ce0ba03aaff2",
          },
        }
      );
      const data = await response.json();

      setPremiers(data.items);
    };
    fetchData();
  }, []);

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
          {premiers.length > 0
            ? premiers.map((item: IPremier) => (
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
