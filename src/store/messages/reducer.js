import { nanoid } from "nanoid";
import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

const initialState = {
  messages: {
    Bot: [
      {
        author: "Automatic answer",
        message: "Robot greets you. I wish you a good day and good mood!",
        date: new Date().toLocaleTimeString(),
        id: nanoid(),
      },
    ],
  },
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: [
            ...(state.messages[action.payload.roomId] ?? []),
            {
              ...action.payload.message,
              date: new Date().toLocaleTimeString(),
              id: nanoid(),
            },
          ],
        },
      };

    case DELETE_MESSAGE:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.roomId]: state.messages[action.payload.roomId].filter(
            (message) => message.id !== action.payload.messageId
          ),
        },
      };
    default:
      return state;
  }
};
