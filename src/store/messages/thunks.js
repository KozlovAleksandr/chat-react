import { sendMessage } from "./actions";

export const sendMessageWithBot = (roomId, message) => (dispatch, getState) => {
  dispatch(sendMessage(roomId, message));

  if (message.author === "User") {
    setTimeout(() => {
      dispatch(
        sendMessage(roomId, {
          author: "Thunk",
          message: "Me too",
        })
      );
    }, 2400);
  }
};
