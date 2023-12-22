import SliderCards from "../../../components/slider/SliderCards.tsx";
import { PremierService } from "../../../services/premierService.ts";
import { createLocalStorage } from "../../../utils/localStorage.ts";
import responseServer from "../../../utils/responseServer.ts";
import { IPremier } from "../../../types/movies.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import "swiper/css";

const Premeres = (): JSX.Element => {
  const [premiersData, setPremiersData] = useState<Array<IPremier>>([]);

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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardsNumberWidth, setCardNumberWidth] = useState<number>(0);
  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (windowWidth > 1400) {
      setCardNumberWidth(7);
    }
    if (windowWidth > 1200 && windowWidth < 1390) {
      setCardNumberWidth(5);
    }
    if (windowWidth > 930 && windowWidth < 1199) {
      setCardNumberWidth(4);
    }
    if (windowWidth > 730 && windowWidth < 929) {
      setCardNumberWidth(3);
    }
    if (windowWidth > 420 && windowWidth < 729) {
      setCardNumberWidth(2);
    }
    if (windowWidth > 300 && windowWidth < 419) {
      setCardNumberWidth(1);
    }
  }, [windowWidth]);

  return (
    <div>
      <h2 className="titleStyles">Премьеры этого месяца</h2>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={cardsNumberWidth}
          loop={true}
          grab-cursor="true"
        >
          {premiersData.length > 0 ? (
            premiersData.map((item: IPremier) => (
              <SwiperSlide key={item.kinopoiskId}>
                <SliderCards item={responseServer(item)} />
              </SwiperSlide>
            ))
          ) : (
            <span className="errorStyles">Нет данных</span>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Premeres;
