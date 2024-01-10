import { CastService } from "../../services/castService";
import Notification from "../notification/Notification";
import { Link, useLocation } from "react-router-dom";
import CastCard from "./actor-list/CastCard";
import { useState, useEffect } from "react";
import { ICast } from "../../types/movies";
import styles from "./Cast.module.css";

const Cast = (): JSX.Element => {
  const [actorsData, setActorsData] = useState<Array<ICast>>([]);
  const [error, setError] = useState<string>("");
  const url = useLocation();
  const id: string = url.pathname.replace(/\D/g, "");
  useEffect(() => {
    const fetchData = async () => {
      const response = await CastService.getCast(id);
      if (typeof response === "string") {
        setError(response);
      } else if (response != undefined) {
        setActorsData(response);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.actorBlocks}>
      {actorsData.map((item: ICast, index) => (
        <Link key={index} to={`/actor/${item.staffId}`}>
          <CastCard actor={item} />
        </Link>
      ))}

      {error.length > 0 && <Notification text={error} />}
    </div>
  );
};
export default Cast;
