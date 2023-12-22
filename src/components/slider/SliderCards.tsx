import styles from "./SliderCards.module.css";
import { IData } from "../../types/movies";
import { Link } from "react-router-dom";
import { FC } from "react";

type data = {
  item: IData;
};

const SliderCards: FC<data> = ({ item }): JSX.Element => {
  return (
    <>
      <div className={styles.card}>
        <img
          className={styles.img}
          src={item.poster.preview}
          alt={item.titleRu}
        />{" "}
      </div>
      <Link to={`/info/${item?.id}`} className={styles.titleCard}>
        {item.titleRu || item.titleEn}
      </Link>
    </>
  );
};
export default SliderCards;
