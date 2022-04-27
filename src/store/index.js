import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messageReducer } from "./messages";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    conversations: conversationReducer,
    messages: messageReducer,
  })
);
