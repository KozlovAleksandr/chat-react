import ChatBlockMessage from "../chat-block-message/chat-block-message";

import "./chat-block-chat.css";

const ChatBlockChat = () => {
  return (
    <div className="chat-block-chat">
      <ChatBlockMessage />
      <div className="inputArea">
        <input type="text" placeholder="Write a message" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default ChatBlockChat;
