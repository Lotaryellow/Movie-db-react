import { FC } from "react";
import styles from "../Premieres.module.css";
import { IPremier } from "../../../../types/movies";
import { Link } from "react-router-dom";

type dataPrem = {
  item: IPremier;
};

const PremiereCard: FC<dataPrem> = ({ item }): JSX.Element => {
  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.img}
          src={item?.posterUrlPreview}
          alt={item.nameRu}
        />
      </div>
      <Link to={`/info/${item.kinopoiskId}`} className={styles.titleCard}>
        {item.nameRu || item.nameEn}
      </Link>
    </>
  );
};
export default PremiereCard;
