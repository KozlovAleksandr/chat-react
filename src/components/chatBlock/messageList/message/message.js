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
      <p className={cls(styles.userName)}>{message.author}</p>
      <p className={cls(styles.messageText)}>{message.message}</p>
      <p className={cls(styles.messageDate)}>{message.date}</p>
    </div>
  );
}
