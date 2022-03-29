import React, { useState, useEffect } from "react";
import { Message } from "./message/message";

import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";

import { useStyles } from "./useStyles";

// import "./chat-block-messageList.css";
// import styles from "./chat-block-messageLis.module.css";

export function MessageList() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([
    {
      author: "Bot",
      message: "Answer",
      date: new Date().toLocaleDateString(),
    },
  ]);

  const styles = useStyles();

  const sendMessage = () => {
    if (value) {
      setMessages([
        ...messages,
        {
          author: "User",
          message: value,
          date: new Date().toLocaleDateString(),
        },
      ]);
      setValue("");
    }
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    const lastMessages = messages[messages.length - 1];
    let timerID = null;

    if (messages.length && lastMessages.author === "User") {
      timerID = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: "Bot",
            message: "Answer",
            date: new Date().toLocaleDateString(),
          },
        ]);
      }, 500);
    }

    return () => {
      clearInterval(timerID);
    };
  }, [messages]);

  return (
    <div className={styles.chatBlock}>
      <div className={styles.messagesBlock}>
        {messages.map((message) => (
          <Message message={message} />
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
