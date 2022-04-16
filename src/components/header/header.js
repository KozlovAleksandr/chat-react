import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";

import styles from "./header.module.css";

const menu = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
];

export function Header() {
  return (
    <div>
      <ButtonGroup
        variant="contained"
        size="large"
        aria-label="large button group"
      >
        {menu.map((item) => (
          <Button variant="outlined" key={item.to}>
            <Link to={item.to} className={styles.link}>
              {item.title}
            </Link>
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
