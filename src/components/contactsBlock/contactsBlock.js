import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { Contact } from "./contact/contact";

export function ContactsBlock() {
  const { roomId } = useParams();
  const [chats] = useState([
    "Selina Kyle",
    "Poison Ivy",
    "Dr. Harleen Quinzel",
    "Bot",
  ]);

  return (
    <List component="nav" style={{ padding: "0" }}>
      {chats.map((chat, index) => (
        <Link
          key={index}
          to={`/chat/${chat}`}
          style={{ textDecoration: "none" }}
        >
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
