import Navigation from "../../navigation-panel/Navigation";
import DigitalReleases from "./digital-releases/DigitalReleases";
import Premieres from "./premieres/Premieres";

const Main = () => {
  return (
    <>
      <Navigation />
      <Premieres />
      <DigitalReleases />
    </>
  );
};
export default Main;
