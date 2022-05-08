import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route, useNavigate } from "react-router-dom";
import { EmptyChat } from "./emptyChat";
import { getConversations } from "../store/conversations";
import { getMessages } from "../store/messages";

import { Layout, ChatBlock, ContactsBlock } from "../components";

export const ChatPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };

    document.addEventListener("keydown", listener);

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [navigate]);

  useEffect(() => {
    dispatch(getConversations());
    dispatch(getMessages());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout
              contactsBlock={<ContactsBlock />}
              chatBlock={<EmptyChat />}
            />
          }
        />
        <Route
          path=":roomId"
          element={
            <Layout
              contactsBlock={<ContactsBlock />}
              chatBlock={<ChatBlock />}
            />
          }
        />
      </Routes>
    </>
  );
};
