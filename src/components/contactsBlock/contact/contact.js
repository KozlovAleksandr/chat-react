import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as Img from "../../../icons";

const useStyles = makeStyles(() => {
  return {
    item: {
      "&.Mui-selected": { background: "#001329" },
      "&.Mui-selected:hover": { background: "#001329" },
    },
    icon: {
      width: "30%",
    },
    title: {
      color: "grey",
    },
  };
});

export function Contact({ title, icon, selected }) {
  const styles = useStyles();

  return (
    <ListItemButton
      className={styles.item}
      selected={selected}
    >
      <ListItem className={styles.icon}>
        <ListItemAvatar>
          <Avatar alt={title} src={Img[`img${icon}`]} />
        </ListItemAvatar>
      </ListItem>
      <ListItemText primary={title} className={styles.title} />
    </ListItemButton>
  );
}
