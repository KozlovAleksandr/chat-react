import { useSelector, useDispatch } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";
import { ProfileForm } from "../components";

import { Switch, List, ListItem, Divider } from "@mui/material";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, isVisibleProfile, country } = useSelector(
    (state) => state.profile
  );

  return (
    <div
      style={{
        justifyContent: "center",
        color: "grey",
        height: "calc(70vh + 100px)",
        margin: "20px 0 0 0",
      }}
    >
      <Switch
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
          <Divider style={{ borderColor: "pink" }} />
          <ListItem style={{ justifyContent: "center" }}>
            <h3>Country: {country} </h3>
          </ListItem>

          <Divider style={{ borderColor: "pink", margin: "50px 0" }} />
          <ProfileForm
            firstName={firstName}
            lastName={lastName}
            country={country}
          />
        </List>
      )}
    </div>
  );
};
