import { FC } from "react";
import styles from "../Premieres.module.css";
import { IPremier } from "../../../../../types/movies";

type dataPrem = {
  item: IPremier;
};

const PremiereCard: FC<dataPrem> = ({ item }): JSX.Element => {
  return (
    <>
      <div className={styles.box1}>
        <img
          className={styles.img}
          src={item?.posterUrlPreview}
          alt={item.nameRu}
        />
      </div>
      <span className={styles.titleCard}>{item.nameRu}</span>
    </>
  );
};
export default PremiereCard;
