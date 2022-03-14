import { Component } from "react";

import "./chat-block-messageList.css";

class ChatBlockMessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: "",
      id: 0,
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
    this.state.id = this.id++;
    if (this.state.text) {
      this.addMessage(this.state.text, "Me", this.state.id);
      this.setState({ text: "" });
    }
  };

  addMessage = (text, author, id) => {
    const newMessage = {
      text,
      author,
      id,
    };
    this.setState(({ messages }) => {
      const newMessageList = [...messages, newMessage];
      return {
        messages: newMessageList,
      };
    });
  };

  componentDidUpdate(prevPops, prevState) {
    if (this.state.id == 1) {
      this.state.id = this.id++;
      this.addMessage("Ответ бота", "Bot", this.state.id);
    }
  }

  render() {
    const { messages, text } = this.state;
    return (
      <div className="chat-block-chat">
        <div className="chat-block-message">
          {messages.map((message) => (
            <div className="message__bubble right" key={message.id}>
              {message.text}
            </div>
          ))}
        </div>
        <form className="inputArea" onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Write a message"
            autoComplete="off"
            value={text}
            name="text"
            onChange={this.onValueChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default ChatBlockMessageList;
