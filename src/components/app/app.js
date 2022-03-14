import ContactBlock from "../contact-block/contact-block";
import ChatBlock from "../chat-block/chat-block";

import "./app.css";

const contacts = [
  { name: "Selina Kyle", avatar: "", isOnline: false, id: 1 },
  { name: "Poison Ivy", avatar: "", isOnline: false, id: 2 },
  { name: "Dr. Harleen Quinzel", avatar: "", isOnline: false, id: 3 },
];

function App() {
  return (
    <div className="app">
      <ContactBlock data={contacts} />
      <ChatBlock />
    </div>
  );
}

export default App;
