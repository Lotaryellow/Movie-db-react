import { FC } from "react";
import { ITop } from "../../types/movies";
import styles from "../../screens/top/Top.module.css";
import { Link } from "react-router-dom";

type dataTop = {
  item: ITop;
};

const TopCard: FC<dataTop> = ({ item }): JSX.Element => {
  return (
    <Link to={`/info/${item.kinopoiskId}`} className={styles.linkCard}>
      <div className={styles.card}>
        <img className={styles.img} src={item?.posterUrl} alt={item.nameRu} />
      </div>
      <span className={styles.text}>
        {item.nameRu || item.nameEn || item.nameOriginal}
      </span>
      <span>Реитинг кинопоиска: {item.ratingKinopoisk}</span>
    </Link>
  );
};
export default TopCard;
