import ChatBlockCompanion from "../chat-block-companion/chat-block-companion";
import ChatBlockChat from "../chat-block-messageList/chat-block-messageList";

import "./chat-block.css";

const ChatBlock = () => {
  return (
    <div className="chat-block">
      <ChatBlockCompanion />
      <ChatBlockChat />
    </div>
  );
};

export default ChatBlock;
