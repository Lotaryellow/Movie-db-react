import { IDigitalRelease } from "../../../../../types/movies";
import styles from "../DigitalReleases.module.css";
import { FC } from "react";

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
      <span className={styles.titleCard}>{item.nameRu}</span>
    </>
  );
};
export default DigitalReleasesCard;
