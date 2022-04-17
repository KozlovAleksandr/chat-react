import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";

import { Switch, List, ListItem, ListItemText, Divider } from "@mui/material";

// const label = { inputProps: { "aria-label": "Switch demo" } };

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, isVisibleProfile } = useSelector(
    (state) => state.profile
  );

  return (
    <div>
      <Switch
        // {...label}
        defaultChecked
        onChange={() => dispatch(toggleVisibleProfile())}
      />

      {isVisibleProfile && (
        <List>
          <ListItem style={{ justifyContent: "center" }}>
            <h3>First name: {firstName} </h3>
          </ListItem>
          <Divider style={{ borderColor: "pink" }} />
          <ListItem style={{ justifyContent: "center" }}>
            <h3>Last name: {lastName} </h3>
          </ListItem>
        </List>
      )}
    </div>
  );
};
