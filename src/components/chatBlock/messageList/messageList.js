import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Message } from "./message/message";

import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";

import { useStyles } from "./useStyles";

export function MessageList() {
  const ref = useRef();
  const { roomId } = useParams();

  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState({
    Bot: [
      {
        author: "Automatic answer",
        message: "Robot greets you. I wish you a good day and good mood!",
        date: new Date().toLocaleTimeString(),
      },
    ],
  });

  const styles = useStyles();

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messageList]);

  // const sendMessage = () => {
  //   if (value) {
  //     setMessageList([
  //       ...messageList,
  //       {
  //         author: "User",
  //         message: value,
  //         date: new Date().toLocaleTimeString(),
  //       },
  //     ]);
  //     setValue("");
  //   }
  // };

  const sendMessage = useCallback(
    (message, author = "User") => {
      if (message) {
        setMessageList({
          ...messageList,
          [roomId]: [
            ...(messageList[roomId] ?? []),
            {
              author,
              message,
              date: new Date().toLocaleTimeString(),
            },
          ],
        });
        setValue("");
      }
    },
    [messageList, roomId]
  );

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage(value);
    }
  };

  // useEffect(() => {
  //   const lastMessages = messageList[messageList.length - 1];
  //   let timerID = null;

  //   if (messageList.length && lastMessages.author === "User") {
  //     timerID = setTimeout(() => {
  //       setMessageList([
  //         ...messageList,
  //         {
  //           author: "Automatic answer",
  //           message: "Robot greets you. I wish you a good day and good mood!",
  //           date: new Date().toLocaleTimeString(),
  //         },
  //       ]);
  //     }, 500);
  //   }

  //   return () => {
  //     clearInterval(timerID);
  //   };
  // }, [messageList]);

  useEffect(() => {
    const messages = messageList[roomId] ?? [];
    const lastMessage = messages[messages.length - 1];
    let timerId = null;

    if (messages.length && lastMessage.author === "User") {
      timerId = setTimeout(() => {
        sendMessage(
          "Robot greets you. I wish you a good day and good mood!",
          "Bot"
        );
      }, 500);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [messageList, roomId, sendMessage]);

  const messages = messageList[roomId] ?? [];

  return (
    <div className={styles.messagesBlock}>
      <div ref={ref} className={styles.conversation}>
        {messages.map((message, index) => (
          <Message message={message} key={index} />
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
            {value && <Send className={styles.icon} onClick={sendMessage} />}
          </InputAdornment>
        }
      />
    </div>
  );
}
