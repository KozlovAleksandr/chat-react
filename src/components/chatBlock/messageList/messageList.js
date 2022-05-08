import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";

import { Message } from "./message/message";
import { useStyles } from "./useStyles";
import { messagesSelector, createMessageFb } from "../../../store/messages";
import { usePrevios } from "../../../hooks/use-previous";

export function MessageList() {
  const ref = useRef();
  const { roomId } = useParams();
  const dispatch = useDispatch();

  const selector = useMemo(() => messagesSelector(roomId), [roomId]);

  const messages = useSelector(selector, shallowEqual);

  const previosMessagesLength = usePrevios(messages.length);

  const [value, setValue] = useState("");
  const styles = useStyles();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages]);

  const send = useCallback(
    (message, author = "User") => {
      if (message) {
        dispatch(createMessageFb(roomId, { author: author || "Bot", message }));
        setValue("");
      }
    },
    [roomId, dispatch]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      send(value);
    }
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (
      messages.length > previosMessagesLength &&
      lastMessage.author === "User"
    ) {
      timerId = setTimeout(() => {
        send("I wish you a good day and good mood!", "Bot");
      }, 800);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messages, roomId, send, previosMessagesLength]);

  return (
    <div className={styles.messagesBlock}>
      <div ref={ref} className={styles.conversation}>
        {messages.map((message, index) => (
          <Message message={message} key={message.id} roomId={roomId} />
        ))}
      </div>

      <Input
        placeholder="Write a message ..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        className={styles.input}
        fullWidth
        endAdornment={
          <InputAdornment position="end">
            {value && <Send className={styles.icon} onClick={send} />}
          </InputAdornment>
        }
      />
    </div>
  );
}
