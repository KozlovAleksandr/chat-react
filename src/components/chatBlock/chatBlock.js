import { Companion } from "./companion/companion";
import { MessageList } from "./messageList/messageList";

export function ChatBlock() {
  return (
    <>
      <Companion />
      <MessageList />
    </>
  );
}
