import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { Contact } from "./contact/contact";

import styles from "./contactsBlock.module.css";

export function ContactsBlock() {
  const { roomId } = useParams();
  const [chats] = useState([
    "Selina Kyle",
    "Poison Ivy",
    "Dr. Harleen Quinzel",
    "Bot",
  ]);

  return (
    <List component="nav" className={styles.list}>
      {chats.map((chat, index) => (
        <Link key={index} to={`/chat/${chat}`} className={styles.link}>
          <Contact
            title={chat}
            key={index}
            icon={index}
            selected={roomId === chat}
          />
        </Link>
      ))}
    </List>
  );
}
