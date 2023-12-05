import styles from "../Random.module.css";
import { FC } from "react";
import { IMovie } from "../../../../types/movies";
import { timeConverter } from "../../../../utils/timeConverter";

type dataRandom = {
  itemData: IMovie;
};

const RandomCard: FC<dataRandom> = ({ itemData }): JSX.Element => {
  return (
    <>
      <div className={styles.randomCard}>
        <div className={styles.imgBlock}>
          <img
            className={styles.img}
            src={itemData?.posterUrl}
            alt={itemData?.nameOriginal}
          />
        </div>

        <div className={styles.textBlock}>
          <span className={styles.title}>
            Название:
            <span className={styles.titleContent}>
              {itemData?.nameRu} \ {itemData?.nameOriginal}
            </span>
          </span>
          {itemData?.ratingKinopoisk ? (
            <span className={styles.title}>
              Рейтинги кинопоиска и Imdb:
              <span className={styles.titleContent}>
                {itemData?.ratingKinopoisk} | {itemData?.ratingImdb}
              </span>
            </span>
          ) : null}
          {itemData?.year ? (
            <span className={styles.title}>
              Год выпуска:
              <span className={styles.titleContent}>{itemData?.year} год.</span>
            </span>
          ) : null}
          {itemData?.filmLength ? (
            <span className={styles.title}>
              Хронометраж:
              <span className={styles.titleContent}>
                {timeConverter(itemData?.filmLength)}
              </span>
            </span>
          ) : null}
          {itemData?.slogan ? (
            <span className={styles.title}>
              Слоган:
              <span className={styles.titleContent}>{itemData?.slogan}</span>
            </span>
          ) : null}
          {itemData?.description ? (
            <span className={styles.title}>
              Описание:
              <span className={styles.titleContent}>
                {itemData?.description}
              </span>
            </span>
          ) : null}
          {itemData.genres ? (
            <span className={styles.title}>
              Жанр:
              {itemData?.genres.map((item) => (
                <span key={item.kinopoiskId} className={styles.titleContent}>
                  {item?.genre}
                </span>
              ))}
            </span>
          ) : null}
          {itemData.countries ? (
            <span className={styles.title}>
              Страны:
              {itemData?.countries.map((item) => (
                <span key={item.kinopoiskId} className={styles.titleContent}>
                  {item?.country}
                </span>
              ))}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default RandomCard;