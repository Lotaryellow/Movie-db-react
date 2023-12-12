import { IDigitalRelease } from "../../../../types/movies";
import styles from "../DigitalReleases.module.css";
import { FC } from "react";
import { Link } from "react-router-dom";

type dataReleases = {
  item: IDigitalRelease;
};

const DigitalReleasesCard: FC<dataReleases> = ({ item }): JSX.Element => {
  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.img}
          src={item?.posterUrlPreview}
          alt={item.nameRu}
        />{" "}
      </div>
      <Link to={`/info/${item.filmId}`} className={styles.titleCard}>
        {item.nameRu || item.nameEn}
      </Link>
    </>
  );
};
export default DigitalReleasesCard;
