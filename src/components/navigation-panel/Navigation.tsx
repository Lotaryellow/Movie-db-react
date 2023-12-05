import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useState, useEffect } from "react";
import { SearchService } from "../../services/searchService";
import { ISearchingMovie } from "../../types/movies";
const Navigation = (): JSX.Element => {
  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState(Array<ISearchingMovie>);
  const fetchData = async () => {
    const response = await SearchService.getSearch(searchName);
    setSearchResult(response.data.films);
  };
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      if (searchName.length > 0) {
        fetchData();
      }
    }, 1000);

    return () => window.clearTimeout(timeoutID);
  }, [searchName]);

  return (
    <div className={styles.content}>
      <div className={styles.logo}>
        <img className={styles.navLogo} src="./logo.svg" alt="logo" />
        <Link to="/" className={styles.navTitle}>
          Movie-DB
        </Link>

        <Link to="/random" className={styles.rndFilms}>
          Случайные фильмы
        </Link>
      </div>
      <div className={styles.searchInputBlock}>
        <input
          className={styles.input}
          type="text"
          placeholder="Поиск"
          onChange={(event) => setSearchName(event.target.value)}
          pattern="^[^\s]+(\s.*)?$"
        />
        {searchName.length > 1 ? (
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
