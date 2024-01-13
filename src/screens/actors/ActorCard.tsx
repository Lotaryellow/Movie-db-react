import Navigation from "../../components/navigation-panel/Navigation";
import FullSpinner from "../../components/full-spinner/MyFullSpinner";
import { ActorService } from "../../services/actorService";
import { Link, useLocation } from "react-router-dom";
import { IFilms, IActor } from "../../types/movies";
import { useEffect, useState } from "react";
import styles from "./ActorCard.module.css";
import Notification from "../../components/notification/Notification";

const ActorCard = () => {
  const [actorData, setActorData] = useState<IActor | null>(null);
  const [filmsSorted, setFilmsSorted] = useState<Array<IFilms>>([]);
  const [loaderSpinner, setLoaderSpinner] = useState<boolean>(false);
  const [actorArr, setActorArr] = useState<Array<IFilms>>([]);
  const [actorHimselfArr, setActorHimselfArr] = useState<Array<IFilms>>([]);
  const [producerArr, setProducerArr] = useState<Array<IFilms>>([]);
  const [directorArr, setDirectorArr] = useState<Array<IFilms>>([]);
  const [writerArr, setWriterArr] = useState<Array<IFilms>>([]);
  const [operatorArr, setOperatorArr] = useState<Array<IFilms>>([]);
  const [editorArr, setEditorArr] = useState<Array<IFilms>>([]);
  const [composerArr, setComposerArr] = useState<Array<IFilms>>([]);
  const [producerUssrArr, setProducerUssrArr] = useState<Array<IFilms>>([]);
  const [translatorArr, setTranslatorArr] = useState<Array<IFilms>>([]);
  const [designArr, setDesignArr] = useState<Array<IFilms>>([]);
  const [voice, setVoice] = useState<Array<IFilms>>([]);
  const [hronoTitr, setHronoTitr] = useState<Array<IFilms>>([]);

  const [error, setError] = useState<string>("");
  const url = useLocation();
  const id: string = url.pathname.replace(/\D/g, "");

  useEffect(() => {
    const fetchData = async () => {
      setLoaderSpinner(true);
      const response = await ActorService.getActor(id);
      if (typeof response === "string") {
        setError(response);
      } else if (response != undefined) {
        setActorData(response);
        const arrProfessionActor = response.films.filter((item) => {
          return item.professionKey === "ACTOR" && item.description.length > 0;
        });
        setActorArr(arrProfessionActor);
        const arrProfessionActorHimself = response.films.filter((item) => {
          return (
            (item.professionKey === "ACTOR" || "HIMSELF" || "HERSELF") &&
            item.description.includes("играет самого себя")
          );
        });
        setActorHimselfArr(arrProfessionActorHimself);
        const arrProducer = response.films.filter((item) => {
          return item.professionKey === "PRODUCER";
        });
        setProducerArr(arrProducer);
        const arrDirector = response.films.filter((item) => {
          return item.professionKey === "DIRECTOR";
        });
        setDirectorArr(arrDirector);
        const arrWriter = response.films.filter((item) => {
          return item.professionKey === "WRITER";
        });
        setWriterArr(arrWriter);
        const arrOperator = response.films.filter((item) => {
          return item.professionKey === "OPERATOR";
        });
        setOperatorArr(arrOperator);
        const arrEditor = response.films.filter((item) => {
          return item.professionKey === "EDITOR";
        });
        setEditorArr(arrEditor);
        const arrComposer = response.films.filter((item) => {
          return item.professionKey === "COMPOSER";
        });
        setComposerArr(arrComposer);
        const arrUSSR = response.films.filter((item) => {
          return item.professionKey === "PRODUCER_USSR";
        });
        setProducerUssrArr(arrUSSR);
        const arrTranslator = response.films.filter((item) => {
          return item.professionKey === "TRANSLATOR";
        });
        setTranslatorArr(arrTranslator);
        const arrDesign = response.films.filter((item) => {
          return item.professionKey === "DESIGN";
        });
        setDesignArr(arrDesign);
        const arrVoiceDir = response.films.filter((item) => {
          return (
            item.professionKey.includes("VOICE") && item.description.length > 0
          );
        });
        setVoice(arrVoiceDir);
        const arrChrono = response.films.filter((item) => {
          return (
            (item.professionKey === "HRONO_TITR_MALE" || "HRONO_TITR_FEMALE") &&
            item.description.includes("в титрах не указан")
          );
        });
        setHronoTitr(arrChrono);
        setLoaderSpinner(false);
      }
      setTimeout(() => {
        setError("");
      }, 7000);
    };

    fetchData();
  }, [id]);

  const [showFlm, setShowFlm] = useState<boolean>(false);

  const filmsOnRole = (arr: IFilms[]) => {
    if (actorData != null) {
      const filmOnRait = arr.sort((a: IFilms, b: IFilms) => {
        return +a.rating - +b.rating;
      });
      setFilmsSorted(filmOnRait.reverse());
      setShowFlm(true);
    }
  };

  return (
    <>
      <Navigation />
      {actorData != null && (
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
                Возраст:{" "}
                <span className={styles.infoText}> {actorData.age}</span> лет.
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
              {actorData.birthday && (
                <span>
                  День рождения:{" "}
                  <span className={styles.infoText}>{actorData.birthday} </span>
                  .
                </span>
              )}
              {actorData.death && (
                <span>
                  Дата смерти:{" "}
                  <span className={styles.infoText}> {actorData.death}</span>.
                </span>
              )}
              {actorData.birthplace && (
                <span>
                  Место рождения:{" "}
                  <span className={styles.infoText}>
                    {actorData.birthplace}{" "}
                  </span>
                  .
                </span>
              )}
              {actorData.deathplace && (
                <span>
                  Место смерти:{" "}
                  <span className={styles.infoText}>
                    {" "}
                    {actorData.deathplace}
                  </span>
                  .
                </span>
              )}
              <span>
                Карьера:{" "}
                <span className={styles.infoText}>{actorData.profession} </span>
              </span>
              {actorData.facts && (
                <div className={styles.factsBlock}>
                  Факты:
                  {actorData.facts.map((item, index) => (
                    <span className={styles.infoTextFacts} key={index}>
                      {" "}
                      {item}
                    </span>
                  ))}
                </div>
              )}
              {actorData.spouses &&
                actorData.spouses.map((item) => (
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
                ))}
            </div>
          </div>

          <h2 className={styles.name}>Фильмография:</h2>
          <div className={styles.filmsBlock}>
            <div className={styles.professionTabs}>
              {actorArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(actorArr)}
                >
                  <span>Актер</span>
                  <span>{actorArr.length} фильмов</span>
                </button>
              )}
              {actorHimselfArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(actorHimselfArr)}
                >
                  <span>Актер: играет самого себя</span>
                  <span>{actorHimselfArr.length} фильмов</span>
                </button>
              )}
              {producerArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(producerArr)}
                >
                  <span>Продюсер</span>
                  <span>{producerArr.length} фильмов</span>
                </button>
              )}
              {directorArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(directorArr)}
                >
                  <span>Режиссёр</span>
                  <span>{directorArr.length} фильмов</span>
                </button>
              )}
              {writerArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(writerArr)}
                >
                  <span>Сценарист</span>
                  <span>{writerArr.length} фильмов</span>
                </button>
              )}
              {operatorArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(operatorArr)}
                >
                  <span>Оператор</span>
                  <span>{operatorArr.length} фильмов</span>
                </button>
              )}
              {editorArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(editorArr)}
                >
                  <span>Монтажер</span>
                  <span>{editorArr.length} фильмов</span>
                </button>
              )}
              {composerArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(composerArr)}
                >
                  <span>Монтажер</span>
                  <span>{composerArr.length} фильмов</span>
                </button>
              )}
              {producerUssrArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(producerUssrArr)}
                >
                  <span>Директор</span>
                  <span>{producerUssrArr.length} фильмов</span>
                </button>
              )}
              {translatorArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(translatorArr)}
                >
                  <span>Переводчик </span>
                  <span>{translatorArr.length} фильмов</span>
                </button>
              )}
              {designArr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(designArr)}
                >
                  <span>Художник </span>
                  <span>{designArr.length} фильмов</span>
                </button>
              )}
              {voice.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(voice)}
                >
                  <span>Актер дубляжа</span>
                  <span>{voice.length} фильмов</span>
                </button>
              )}
              {hronoTitr.length > 0 && (
                <button
                  className={styles.profession}
                  onClick={() => filmsOnRole(hronoTitr)}
                >
                  <span>Актер: Хроника, В титрах не указан</span>
                  <span>{hronoTitr.length} фильмов</span>
                </button>
              )}
            </div>
            {showFlm == true &&
              filmsSorted.map((film, index) => (
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
                  {film.description.includes("играет самого себя") ? null : (
                    <span className={styles.filmInfo}>
                      Роль:
                      <span className={styles.linkText}>
                        {film.description}
                      </span>
                      .
                    </span>
                  )}
                  <span className={styles.filmInfo}>
                    Рейтинг:
                    <span className={styles.linkText}>
                      {film.rating == null ? `\u2013` : film.rating}
                    </span>
                    .
                  </span>
                </Link>
              ))}
          </div>
        </div>
      )}
      {error.length > 0 && <Notification text={error} />}
      {actorData == null && <FullSpinner loading={loaderSpinner} />}
    </>
  );
};
export default ActorCard;
