import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = (): JSX.Element => {
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
          pattern="^[^\s]+(\s.*)?$"
        />
      </div>
    </div>
  );
};
export default Navigation;
