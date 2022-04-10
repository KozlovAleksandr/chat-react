import { useState } from "react";
import { List } from "@mui/material";
import { Contact } from "./contact";

export function ContactsBlock() {
  const [chats] = useState([
    "Selina Kyle",
    "Poison Ivy",
    "Dr. Harleen Quinzel",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <List component="nav" style={{ padding: "0" }}>
      {chats.map((chat, index) => (
        <Contact
          title={chat}
          key={index}
          icon={index}
          selected={selectedIndex === index}
          handleListItemClick={() => setSelectedIndex(index)}
        />
      ))}
    </List>
  );
}
