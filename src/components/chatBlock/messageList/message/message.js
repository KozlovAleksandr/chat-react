import { useDispatch } from "react-redux";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";

import cls from "classnames";
import { Button } from "@mui/material";

import { deleteMessage } from "../../../../store/messages"; // библиотека имён классов
import styles from "./message.module.css";

export function Message({ message, children, roomId }) {
  const dispatch = useDispatch();

  return (
    <div
      className={cls(styles.message, {
        [styles.userMessage]: message.author === "User",
      })}
    >
      <p className={cls(styles.userName)}>{message.author}</p>

      <HighlightOffOutlinedIcon
        className={cls(styles.del)}
        color="warning"
        onClick={() => dispatch(deleteMessage(roomId, message?.id))}
      />
      <p className={cls(styles.messageText)}>{message.message}</p>
      <p className={cls(styles.messageDate)}>{message.date}</p>
    </div>
  );
}
