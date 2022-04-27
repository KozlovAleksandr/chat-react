import { useSelector, useDispatch } from "react-redux";
import {
  createConversation,
  deleteConversation,
  conversationsSelector,
} from "../../store/conversations";

import { Link, useParams, useNavigate } from "react-router-dom";
import { List, Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Contact } from "./contact/contact";

export function ContactsBlock() {
  const { roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const conversations = useSelector(conversationsSelector);

  const create = () => {
    const name = prompt("Name the Chat");
    const isValidName = !conversations.includes(name);

    if (!!name && isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("Chat exists");
    }
  };

  const deleteCon = (conversation) => {
    dispatch(deleteConversation(conversation));
    navigate("/chat");
  };

  return (
    <List component="nav" style={{ padding: "0" }}>
      <Button
        color="warning"
        style={{ padding: "10px", width: "100%" }}
        onClick={create}
      >
        Create Chat
      </Button>

      {conversations.map((chat, index) => (
        <div key={index}>
          <Link
            to={`/chat/${chat}`}
            style={{ textDecoration: "none", position: "relative" }}
          >
            <Contact
              title={chat}
              key={index}
              icon={index}
              selected={roomId === chat}
            />
            <DeleteOutlineIcon
              style={{
                position: "absolute",
                cursor: "pointer",
                top: "23px",
                left: "100px",
              }}
              color="warning"
              onClick={() => deleteCon(chat)}
            />
          </Link>
        </div>
      ))}
    </List>
  );
}
