import { useSelector, useDispatch } from "react-redux";
import {
  createConversationFB,
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

  const { conversations, pending } = useSelector(conversationsSelector);

  const create = () => {
    const name = prompt("Name the Chat");
    const isValidName = !conversations.includes(name);

    if (!!name && isValidName) {
      dispatch(createConversationFB(name));
    } else {
      alert("Chat exists");
    }
  };

  const deleteCon = (conversation) => {
    dispatch(deleteConversation(conversation));
    // ! НЕ РАБОАТЕТ ПЕРЕАДРЕСАЦИЯ ПОСЛЕ УДАЛЕНИЯ ЧАТА
    navigate("/chat");
  };

  if (pending) {
    return <h1>PENDING ...</h1>;
  }

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
            <Contact title={chat} key={index} selected={roomId === chat} />
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
