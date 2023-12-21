import { FC, useState } from "react";
import styles from "../../screens/info/FilmInfo.module.css";
import { IMovie } from "../../types/movies";
import { timeConverter } from "../../utils/timeConverter";
import Cast from "../cast/Cast";

type dataInfo = {
  item: IMovie;
};

const InfoCard: FC<dataInfo> = ({ item }): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const showActors = () => {
    setShow(!show);
  };

  return (
    <div className={styles.content}>
      <div className={styles.infoCard}>
        <img
          className={styles.img}
          src={item?.posterUrl}
          alt={item?.nameOriginal}
        />
        <span className={styles.title}>
          Название:
          <span className={styles.titleContent}>
            {item?.nameRu || item?.nameOriginal}
          </span>
        </span>
        {item?.ratingKinopoisk ? (
          <span className={styles.title}>
            Рейтинги Кинопоиска и Imdb:
            <span className={styles.titleContent}>
              {item?.ratingKinopoisk ? item?.ratingKinopoisk : "Нет данных"}
              {" / "}
              {item?.ratingImdb ? item?.ratingImdb : "Нет данных"}
            </span>
          </span>
        ) : null}
        {item?.year ? (
          <span className={styles.title}>
            Год выпуска:
            <span className={styles.titleContent}>{item?.year} год.</span>
          </span>
        ) : null}
        {item?.filmLength ? (
          <span className={styles.title}>
            Хронометраж:
            <span className={styles.titleContent}>
              {timeConverter(item?.filmLength)}
            </span>
          </span>
        ) : null}
        {item?.slogan ? (
          <span className={styles.title}>
            Слоган:
            <span className={styles.titleContent}>{item?.slogan}</span>
          </span>
        ) : null}
        {item?.description ? (
          <span className={styles.title}>
            Описание:
            <span className={styles.titleContent}>{item?.description}</span>
          </span>
        ) : null}
        {item.genres ? (
          <span className={styles.title}>
            Жанр:
            {item?.genres.map((genre, index) => (
              <span key={index} className={styles.titleContent}>
                {genre.genre}
                {index < item?.genres?.length - 1 ? "," : ""}
              </span>
            ))}
          </span>
        ) : null}
        {item.countries ? (
          <span className={styles.title}>
            Страны:
            {item?.countries.map((country, index) => (
              <span key={index} className={styles.titleContent}>
                {country?.country}
                {index < item?.countries?.length - 1 ? "," : ""}
              </span>
            ))}
          </span>
        ) : null}
      </div>
      <div className={styles.actorBlock}>
        <button className={styles.btnActor} onClick={showActors}>
          Посмотреть список актеров
        </button>
        {show == true ? <Cast /> : null}
      </div>
    </div>
  );
};
export default InfoCard;
