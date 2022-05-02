import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messageReducer } from "./messages";
import { botMessage } from "./middlewares";

import { getPublicGistsApi, searchGistsByNameApi } from "../api/gists";
import { gistsReducer } from "./gists";

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
  gists: gistsReducer,
});

export const store = createStore(
  persistReducer(persistConfig, reducer),
  compose(
    applyMiddleware(
      thunk.withExtraArgument({ getPublicGistsApi, searchGistsByNameApi }),
      botMessage
    )
  )
);

export const persistor = persistStore(store);
