import { createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messageReducer } from "./messages";
import { botMessage } from "./middlewares";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    conversations: conversationReducer,
    messages: messageReducer,
  }),
  applyMiddleware(botMessage)
);
