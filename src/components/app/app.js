import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../../components";
import { HomePage, ChatPage } from "../../pages";

const contacts = [
  { name: "Selina Kyle", avatar: "", isOnline: false, id: 1 },
  { name: "Poison Ivy", avatar: "", isOnline: false, id: 2 },
  { name: "Dr. Harleen Quinzel", avatar: "", isOnline: false, id: 3 },
];

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/chat/*" element={<ChatPage />}></Route>

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
