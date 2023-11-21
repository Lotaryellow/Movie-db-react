import { FC } from "react";
import styles from "../Premieres.module.css";
import { IPremier } from "../../../../types/movies";

type dataPrem = {
  item: IPremier;
};

const PremiereCard: FC<dataPrem> = ({ item }): JSX.Element => {
  return (
    <div className={styles.box1}>
      <img className={styles.img} src={item?.posterUrl} alt={item.nameRu} />{" "}
      <span>Название: {item?.nameRu}</span>
      <span>{item?.nameEng}</span>
      <span>{item?.premierRu}</span>
    </div>
  );
};
export default PremiereCard;
