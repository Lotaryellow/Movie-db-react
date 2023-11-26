import { FC } from "react";
import styles from "../FilmInfo.module.css";
import { IMovie } from "../../../../types/movies";

type dataInfo = {
  item: IMovie;
};

const InfoCard: FC<dataInfo> = ({ item }): JSX.Element => {
  return (
    <div className={styles.infoCard}>
      <img
        className={styles.img}
        src={item?.posterUrl}
        alt={item?.nameOriginal}
      />
      <span className={styles.title}>
        Название:
        <span className={styles.titleContent}>
          {item?.nameRu} \ {item?.nameOriginal}
        </span>
      </span>
      {item?.ratingKinopoisk ? (
        <span className={styles.title}>
          Рейтинги кинопоиска и Imdb:
          <span className={styles.titleContent}>
            {item?.ratingKinopoisk} | {item?.ratingImdb}
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
          <span className={styles.titleContent}>{item?.filmLength}</span>
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
          {item?.genres.map((item) => (
            <span key={item.kinopoiskId} className={styles.titleContent}>
              {item?.genre}
            </span>
          ))}
        </span>
      ) : null}
      {item.countries ? (
        <span className={styles.title}>
          Страны:
          {item?.countries.map((item) => (
            <span key={item.kinopoiskId} className={styles.titleContent}>
              {item?.country}
            </span>
          ))}
        </span>
      ) : null}
    </div>
  );
};
export default InfoCard;
