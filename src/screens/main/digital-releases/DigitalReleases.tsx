import SliderCards from "../../../components/slider/SliderCards.tsx";
import { createLocalStorage } from "../../../utils/localStorage.ts";
import { IDigitalRelease } from "../../../types/movies.ts";
import { DigitalReleasesService } from "../../../services/digitalReleasesService.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

import "swiper/css";
import responseServer from "../../../utils/responseServer.ts";

const DigitalReleases = (): JSX.Element => {
  const [digitalReleasesData, setDigitalReleasesData] = useState<
    Array<IDigitalRelease>
  >([]);

  const digitalReleasesLocalStorage = localStorage.getItem("releases");
  useEffect(() => {
    if (
      typeof digitalReleasesLocalStorage === "string" &&
      JSON.parse(digitalReleasesLocalStorage).saveTime ==
        new Date().toJSON().split("T")[0]
    ) {
      setDigitalReleasesData(JSON.parse(digitalReleasesLocalStorage).data);
    } else {
      const fetchData = async () => {
        const response = await DigitalReleasesService.getReleases();
        setDigitalReleasesData(response?.data?.releases);
        createLocalStorage("releases", response.data?.releases);
      };
      fetchData();
    }
  }, [digitalReleasesLocalStorage]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cardsNumberWidth, setCardNumberWidth] = useState<number>(0);
  useEffect(() => {
    const handle = (): void => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handle);
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
      <h2 className="titleStyles">Цифровые релизы этого месяца</h2>
      <div>
        <Swiper
          spaceBetween={30}
          slidesPerView={cardsNumberWidth}
          loop={true}
          grab-cursor="true"
        >
          {digitalReleasesData.length > 0 ? (
            digitalReleasesData.map((item: IDigitalRelease) => (
              <SwiperSlide key={item.filmId}>
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
export default DigitalReleases;
