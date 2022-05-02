import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "../../components";
import { HomePage, ChatPage, ProfilePage, GistsPage } from "../../pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat/*" element={<ChatPage />}></Route>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/gists" element={<GistsPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
