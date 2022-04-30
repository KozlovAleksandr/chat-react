import { Routes, Route } from "react-router-dom";
import { EmptyChat } from "./emptyChat";

import { Layout, ChatBlock, ContactsBlock } from "../components";

export const ChatPage = () => {
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
