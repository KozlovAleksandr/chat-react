import { Component } from "react";

import "./chat-block-messageList.css";

class ChatBlockChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.id = 0;
  }

  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text) {
      this.addMessage(this.state.text);
      this.setState({
        text: "",
        author: "",
        id: "",
      });
    }
  };

  addMessage = (text) => {
    const newMessage = {
      text,
      author: "Me",
      id: this.id++,
    };
    this.setState(({ messages }) => {
      const newMessageList = [...messages, newMessage];
      return {
        messages: newMessageList,
      };
    });
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="chat-block-chat">
        <div className="chat-block-message">
          {messages.map((message) => (
            <div className="message__bubble" key={message.id}>
              {message.text}
            </div>
          ))}
        </div>
        <form className="inputArea" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Write a message"
            autoComplete="off"
            value={messages.text}
            name="text"
            onChange={this.onValueChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default ChatBlockChat;
