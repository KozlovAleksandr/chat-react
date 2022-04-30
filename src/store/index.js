import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messageReducer } from "./messages";
import { botMessage, thunk } from "./middlewares";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["conversations"],
  whitelist: ["profile", "messages"],
};

const reducer = combineReducers({
  profile: profileReducer,
  conversations: conversationReducer,
  messages: messageReducer,
});

export const store = createStore(
  persistReducer(persistConfig, reducer),
  compose(applyMiddleware(thunk, botMessage))
);

export const persistor = persistStore(store);
