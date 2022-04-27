import { CREATE_CONVERSATION, DELETE_CONVERSATION } from "./types";

const initialState = {
  conversations: ["Selina Kyle", "Poison Ivy", "Dr. Harleen Quinzel", "Bot"],
};

export const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONVERSATION:
      return {
        ...state,
        conversations: [...state.conversations, action.payload],
      };
    case DELETE_CONVERSATION:
      return {
        ...state,
        conversations: state.conversations.filter(
          (conversation) => conversation !== action.payload
        ),
      };
    default:
      return state;
  }
};