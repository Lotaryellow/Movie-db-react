import Navigation from "../../components/navigation-panel/Navigation";
import { ActorService } from "../../services/actorService";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IFilms, iActor } from "../../types/movies";
import styles from "./ActorCard.module.css";

const ActorCard = () => {
  const [actorData, setActorData] = useState<iActor>(Object);
  const [filmsSorted, setFilmsSorted] = useState<Array<IFilms>>([]);
  const url = useLocation();
  const id: string = url.pathname.replace(/\D/g, "");

  useEffect(() => {
    const fetchData = async () => {
      const response = await ActorService.getActor(id);
      setActorData(response.data);
      if (actorData.films.length > 2) {
        const filmOnRait = actorData.films.sort((a: IFilms, b: IFilms) => {
          return +a.rating - +b.rating;
        });

        setFilmsSorted(filmOnRait.reverse());
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Navigation />
      <div className={styles.actorCard}>
        <div className={styles.personBlock}>
          <img
            className={styles.img}
            src={actorData.posterUrl}
            alt={actorData.nameEn}
          />
          <div className={styles.actorCardTextBlock}>
            <h2 className={styles.name}>
              {actorData.nameRu || actorData.nameEn}.
            </h2>
            <span>
              Возраст: <span className={styles.infoText}> {actorData.age}</span>{" "}
              лет.
            </span>
            <span>
              Пол:{" "}
              <span className={styles.infoText}>
                {" "}
                {actorData.sex == "MALE" ? "Мужчина" : "Женщина"}
              </span>
              .
            </span>
            <span>Рост: {actorData.growth} см.</span>
            {actorData.birthday != null ? (
              <span>
                День рождения:{" "}
                <span className={styles.infoText}>{actorData.birthday} </span>.
              </span>
            ) : null}
            {actorData.death != null ? (
              <span>
                Дата смерти:{" "}
                <span className={styles.infoText}> {actorData.death}</span>.
              </span>
            ) : null}
            {actorData.birthplace != null ? (
              <span>
                Место рождения:{" "}
                <span className={styles.infoText}>{actorData.birthplace} </span>
                .
              </span>
            ) : null}
            {actorData.deathplace != null ? (
              <span>
                Место смерти:{" "}
                <span className={styles.infoText}> {actorData.deathplace}</span>
                .
              </span>
            ) : null}
            <span>
              Карьера:{" "}
              <span className={styles.infoText}>{actorData.profession} </span>
            </span>
            {actorData.facts != null ? (
              <div className={styles.factsBlock}>
                Факты:
                {actorData.facts.map((item, index) => (
                  <span className={styles.infoTextFacts} key={index}>
                    {" "}
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
            {actorData.spouses != null
              ? actorData.spouses.map((item) => (
                  <div key={item?.personId} className={styles.spousesBlock}>
                    {"Семья:"}
                    <span className={styles.spousesText}>
                      {item?.name} - {item?.relation}.
                    </span>
                    <span className={styles.spousesText}>
                      Пол: {item?.sex == "MALE" ? "Мужчина" : "Женщина"}.
                    </span>
                    <span className={styles.spousesText}>
                      Дети: {item?.children}.
                    </span>
                  </div>
                ))
              : null}
          </div>
        </div>
        {filmsSorted != null ? (
          <div className={styles.filmsBlock}>
            <h2 className={styles.name}>Фильмография:</h2>
            {filmsSorted.map((film, index) => (
              <Link
                key={index}
                to={`/info/${film.filmId}`}
                className={styles.link}
              >
                <span className={styles.filmInfo}>
                  Название:
                  <span className={styles.linkText}>
                    {film.nameRu || film.nameEn}
                  </span>
                  .
                </span>
                <span className={styles.filmInfo}>
                  Роль:
                  <span className={styles.linkText}>{film.description}</span>.
                </span>
                <span className={styles.filmInfo}>
                  Рейтинг:
                  <span className={styles.linkText}>{film.rating}</span>.
                </span>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};
export default ActorCard;
