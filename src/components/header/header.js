import { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";

import { ThemeContext } from "../../theme-context";

import styles from "./header.module.css";

const menu = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
];

export function Header() {
  const { themeSetter, theme } = useContext(ThemeContext);

  return (
    <div>
      <ButtonGroup
        variant="contained"
        size="large"
        aria-label="large button group"
        className={styles.link}
      >
        {menu.map((item) => (
          <Button variant="outlined" key={item.to}>
            <Link to={item.to} className={styles.link}>
              {item.title}
            </Link>
          </Button>
        ))}
        <Button
          variant="outlined"
          style={{ color: "#808080" }}
          onClick={() => themeSetter("pink")}
        >
          pink
        </Button>
        <Button
          variant="outlined"
          style={{ color: "#808080" }}
          onClick={() => themeSetter("dark")}
        >
          dark
        </Button>
      </ButtonGroup>
    </div>
  );
}
