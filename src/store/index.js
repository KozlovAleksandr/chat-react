import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    conversations: conversationReducer,
  })
);
