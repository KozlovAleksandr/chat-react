import "./chat-block-message.css";

const Message = (props) => {
  return (
    <div className="chat-block-message">
      <div className="message__bubble">{props.text}</div>
    </div>
  );
};

const ChatBlockMessage = () => {
  return <Message text="Первое сообщение" />;
};

export default ChatBlockMessage;
