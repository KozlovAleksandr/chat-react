import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { Header, PrivateRoute, PublicRoute } from "../../components";
import {
  HomePage,
  ChatPage,
  ProfilePage,
  GistsPage,
  LoginPage,
  SignUpPage,
} from "../../pages";
import { auth } from "../../api/firebase";

const App = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user);
      } else {
        setSession(null);
      }
    });
  }, []);

  const isAuth = !!session;

  return (
    <>
      <BrowserRouter>
        <Header session={isAuth} />
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute isAuth={isAuth} to="/login">
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/chat/*"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ChatPage />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <PrivateRoute isAuth={isAuth}>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/gists"
            element={
              <PrivateRoute isAuth={isAuth}>
                <GistsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute isAuth={isAuth}>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signUp"
            element={
              <PublicRoute isAuth={isAuth}>
                <SignUpPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
