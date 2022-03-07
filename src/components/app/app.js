import ContactBlock from "../contact-block/contact-block";
import ChatBlock from "../chat-block/chat-block";

import "./app.css";

const contacts = [
  { name: "Selina Kyle", avatar: "", isOnline: false, id: 1 },
  { name: "Poison Ivy", avatar: "", isOnline: false, id: 2 },
  { name: "Dr. Harleen Quinzel", avatar: "", isOnline: false, id: 3 },
];

const messageList = ["Первое сообщение", "Второе сообщение"];

function App() {
  return (
    <div className="app">
      <ContactBlock data={contacts} />
      <ChatBlock data={messageList} />
    </div>
  );
}

export default App;
