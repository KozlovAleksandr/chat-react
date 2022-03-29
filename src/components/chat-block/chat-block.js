import { Companion } from "./companion/companion";
import { MessageList } from "./messageList/messageList";

import "./chat-block.css";

const ChatBlock = () => {
  return (
    <div className="chat-block">
      <Companion />
      <MessageList />
    </div>
  );
};

export default ChatBlock;
