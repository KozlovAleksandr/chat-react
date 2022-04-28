import { SEND_MESSAGE, sendMessage } from "../messages/";

export const botMessage = (store) => (next) => (action) => {
  if (
    action.type === SEND_MESSAGE &&
    action.payload.message.author === "User"
  ) {
    setTimeout(() => {
      store.dispatch(
        sendMessage(action.payload.roomId, {
          author: "Bot",
          message:
            "Middleware greets you. I wish you a good day and good mood!",
        })
      );
    }, 1400);
  }

  return next(action);
};
