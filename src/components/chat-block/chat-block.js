import ChatBlockCompanion from "../chat-block-companion/chat-block-companion";
import ChatBlockMessageList from "../chat-block-messageList/chat-block-messageList";

import "./chat-block.css";

const ChatBlock = () => {
  return (
    <div className="chat-block">
      <ChatBlockCompanion />
      <ChatBlockMessageList />
    </div>
  );
};

export default ChatBlock;
