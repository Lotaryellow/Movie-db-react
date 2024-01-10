import styles from "./Notification.module.css";
import { FC } from "react";

type errorText = {
  text: string;
};

const Notification: FC<errorText> = ({ text }) => {
  return (
    <div className={styles.content}>
      {" "}
      <span>Ошибочка вышла {text}</span>
    </div>
  );
};
export default Notification;
