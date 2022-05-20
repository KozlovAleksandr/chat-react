import { useContext } from "react";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";

import { ThemeContext } from "../../theme-context";
import { auth } from "../../api/firebase";

import styles from "./header.module.css";

const menuWithSession = [
  { title: "Home", to: "/" },
  { title: "Chat", to: "/chat" },
  { title: "Profile", to: "/profile" },
  { title: "Gists", to: "/gists" },
];
const menuWithoutSession = [
  { title: "Login", to: "/login" },
  { title: "Sign-Up", to: "/signUp" },
];

export function Header({ session }) {
  const { themeSetter, theme } = useContext(ThemeContext);

  return (
    <div>
      {!!session && (
        <ButtonGroup
          variant="contained"
          size="large"
          aria-label="large button group"
          className={styles.link}
        >
          {menuWithSession.map((item) => (
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
          <Button
            variant="outlined"
            style={{ color: "#808080" }}
            onClick={() => signOut(auth)}
          >
            Sign-out
          </Button>
        </ButtonGroup>
      )}

      {!session && (
        <ButtonGroup
          variant="contained"
          size="large"
          aria-label="large button group"
          className={styles.link}
        >
          {menuWithoutSession.map((item) => (
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
      )}
    </div>
  );
}
