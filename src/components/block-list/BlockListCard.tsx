import { timeConverter } from "../../utils/timeConverter";
import styles from "./BlockListCard.module.css";
import { IData } from "../../types/movies";
import { Link } from "react-router-dom";
import { FC } from "react";

type data = {
  item: IData;
};

const BlockListCard: FC<data> = ({ item }): JSX.Element => {
  return (
    <>
      <Link to={`/info/${item?.id}`}>
        <div className={styles.randomCard}>
          <div className={styles.imgBlock}>
            <img
              className={styles.img}
              src={item?.poster.preview}
              alt={item?.titleRu}
            />
          </div>

          <div className={styles.textBlock}>
            <span className={styles.title}>
              Название:
              <span className={styles.titleContent}>
                {item?.titleOriginal || item?.titleRu || item?.titleEn}
              </span>
            </span>
            {item?.ratings.kinopoisk ? (
              <span className={styles.title}>
                Рейтинги Кинопоиска и Imdb:
                <span className={styles.titleContent}>
                  {item?.ratings.kinopoisk}
                  {" / "}
                  {item?.ratings.imdb}
                </span>
              </span>
            ) : null}
            {item?.year ? (
              <span className={styles.title}>
                Год выпуска:
                <span className={styles.titleContent}>{item?.year} год</span>
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
                {item?.genres.map((item, index) => (
                  <span key={index} className={styles.titleContent}>
                    {item?.genre}
                    {index < item?.genres?.length - 1 ? "," : ""}
                  </span>
                ))}
              </span>
            ) : null}
            {item.countries ? (
              <span className={styles.title}>
                Страны:
                {item?.countries.map((item, index) => (
                  <span key={index} className={styles.titleContent}>
                    {item?.country}
                    {index < item?.countries?.length - 1 ? "," : ""}
                  </span>
                ))}
              </span>
            ) : null}
          </div>
        </div>
      </Link>
    </>
  );
};
export default BlockListCard;
