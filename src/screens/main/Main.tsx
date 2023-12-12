import Navigation from "../../components/navigation-panel/Navigation";
import DigitalReleases from "./digital-releases/DigitalReleases";
import Premieres from "./premieres/Premieres";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <>
      <Navigation />
      <Premieres />
      <DigitalReleases />
      <h2 className={styles.newsTitle}>Новые материалы в разработке</h2>
    </>
  );
};
export default Main;
