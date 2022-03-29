import { style } from "@mui/system";
import cls from "classnames"; // библиотека имён классов
import styles from "./message.module.css";

export function Message({ message }) {
  return (
    <div
      className={cls(styles.message, {
        [styles.userMessage]: message.author === "User",
      })}
    >
      <h5>{message.author}</h5>
      <h3>{message.message}</h3>
      <h6>{message.date}</h6>
    </div>
  );
}
