import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messageReducer } from "./messages";
import { gistsReducer } from "./gists";
import { botMessage } from "./middlewares";

import { getPublicGistsApi, searchGistsByNameApi } from "../api/gists";
import {
  getConversationApi,
  createConversationApi,
} from "../api/conversations";
import { getMessagesApi, createMessageApi } from "../api/messages";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["conversations"],
  whitelist: ["profile", "messages"],
};

export const reducer = combineReducers({
  profile: profileReducer,
  conversations: conversationsReducer,
  messages: messageReducer,
  gists: gistsReducer,
});

export const store = createStore(
  persistReducer(persistConfig, reducer),
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getPublicGistsApi,
        searchGistsByNameApi,
        getConversationApi,
        getMessagesApi,
        createMessageApi,
        createConversationApi,
      }),
      botMessage
    )
  )
);

export const persistor = persistStore(store);
