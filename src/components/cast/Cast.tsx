import { useState, useEffect } from "react";
import { ICast } from "../../types/movies";
import { Link, useLocation } from "react-router-dom";
import styles from "./Cast.module.css";
import CastCard from "./actor-list/CastCard";
import { CastService } from "../../services/castService";

const Cast = (): JSX.Element => {
  const [actorsData, setActorsData] = useState<Array<ICast>>([]);

  const url = useLocation();
  const id: string = url.pathname.replace(/\D/g, "");
  useEffect(() => {
    const fetchData = async () => {
      const response = await CastService.getCast(id);
      setActorsData(response.data);
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
    </div>
  );
};
export default Cast;
