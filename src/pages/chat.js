import { Routes, Route } from "react-router-dom";

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
              chatBlock={<ChatBlock />}
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
