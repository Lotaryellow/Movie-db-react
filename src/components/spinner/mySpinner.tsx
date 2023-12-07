import { FC } from "react";
import "./styles.css";
type loadingState = {
  loading: boolean;
};
const Spinner: FC<loadingState> = ({ loading }) => {
  if (!loading) {
    return null;
  } else
    return (
      <div className="spinner">
        <div className="spinner-circle spinner-circle-outer"></div>
        <div className="spinner-circle-off spinner-circle-inner"></div>
        <div className="spinner-circle spinner-circle-single-1"></div>
        <div className="spinner-circle spinner-circle-single-2"></div>
        <div className="text"></div>
      </div>
    );
};
export default Spinner;
