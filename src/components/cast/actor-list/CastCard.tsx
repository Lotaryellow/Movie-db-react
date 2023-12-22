import { ICast } from "../../../types/movies";
import styles from "../Cast.module.css";
import { FC } from "react";

type dataActor = {
  actor: ICast;
};

const CastCard: FC<dataActor> = ({ actor }) => {
  return (
    <div className={styles.block}>
      {actor.professionKey == "ACTOR" ? (
        <>
          <div className={styles.imgBlock}>
            <img
              className={styles.img}
              src={actor.posterUrl}
              alt={actor.nameEn}
            />
          </div>
          <span className={styles.text}>
            Имя актера: {actor.nameRu || actor.nameEn}
          </span>
          <span className={styles.text}>Роль: {actor.description}</span>
        </>
      ) : null}
    </div>
  );
};
export default CastCard;
