import { SearchService } from "../../services/searchService";
import { useState, useEffect, SetStateAction } from "react";
import { ISearchingMovie } from "../../types/movies";
import styles from "./Navigation.module.css";
import Spinner from "../spinner/mySpinner";
import { Link } from "react-router-dom";

const Navigation = (): JSX.Element => {
  const [searchName, setSearchName] = useState<string>("");
  const [searchResult, setSearchResult] = useState<Array<ISearchingMovie>>([]);
  const [loaderSpinner, setLoaderSpinner] = useState<boolean>(false);
  const [searchOn, setSearchOn] = useState<boolean>(false);
  const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false);

  const inputSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchName(event.target.value);
    setSearchOn(true);
  };
  useEffect(() => {
    window.addEventListener("click", () => {
      setSearchOn(false);
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      setLoaderSpinner(true);
      const response = await SearchService.getSearch(searchName);
      setSearchResult(response.data.films);
      setLoaderSpinner(false);
    };
    const timeoutID = window.setTimeout(() => {
      if (searchName.length > 0) {
        fetchData();
      }
    }, 1000);
    return () => window.clearTimeout(timeoutID);
  }, [searchName]);

  const handleClick = () => {
    setSelectIsOpen(!selectIsOpen);
  };

  return (
    <div className={styles.content}>
      <div className={styles.logo}>
        <Link to="/">
          <img className={styles.navLogo} src="./logo.svg" alt="logo" />
        </Link>
        <Link to="/" className={styles.navTitle}>
          Movie-DB
        </Link>

        <Link to="/random" className={styles.rndFilms}>
          Случайные фильмы
        </Link>

        <div onClick={handleClick} className={styles.selectLinks}>
          Подборки и Топы
          {selectIsOpen == true ? (
            <div className={styles.linksBlock}>
              <Link className={styles.topLink} to={`/top/${"TOP_250_MOVIES"}`}>
                Топ 250
              </Link>
              <Link
                className={styles.topLink}
                to={`/top/${"TOP_250_TV_SHOWS"}`}
              >
                Топ 250 Сериалов
              </Link>
              <Link className={styles.topLink} to={`/top/${"TOP_POPULAR_ALL"}`}>
                Популярное сейчас
              </Link>
              <Link className={styles.topLink} to={`/top/${"ZOMBIE_THEME"}`}>
                Топ Зомби Тематика
              </Link>
              <Link className={styles.topLink} to={`/top/${"VAMPIRE_THEME"}`}>
                Топ Вампирская Тематика
              </Link>
              <Link className={styles.topLink} to={`/top/${"LOVE_THEME"}`}>
                Топ Романтическая Тематика
              </Link>
              <Link
                className={styles.topLink}
                to={`/top/${"CATASTROPHE_THEME"}`}
              >
                Топ Катастрофы Тематика
              </Link>
            </div>
          ) : null}
        </div>
      </div>
      <div className={styles.searchInputBlock}>
        <div className={styles.spinner}>
          <Spinner loading={loaderSpinner} />
        </div>

        <input
          className={styles.input}
          type="text"
          placeholder="Поиск"
          onChange={inputSearch}
          pattern="^[^\s]+(\s.*)?$"
        />
        {searchOn == true ? (
          <div className={styles.searchResult}>
            {searchResult.map((item: ISearchingMovie) => (
              <button key={item.filmId} className={styles.searchButton}>
                <Link to={`/info/${item.filmId}`} className={styles.searchCard}>
                  <div className={styles.searchImgContainer}>
                    <img
                      className={styles.searchImg}
                      src={item.posterUrlPreview}
                      alt={item.nameRu}
                    />
                  </div>
                  <span className={styles.searchItemName}>
                    {item.nameEn || item.nameRu}
                  </span>
                </Link>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Navigation;
