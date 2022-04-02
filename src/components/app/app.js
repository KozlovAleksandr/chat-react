import { ContactBlock, Layout, ChatBlock } from "../../components";

const contacts = [
  { name: "Selina Kyle", avatar: "", isOnline: false, id: 1 },
  { name: "Poison Ivy", avatar: "", isOnline: false, id: 2 },
  { name: "Dr. Harleen Quinzel", avatar: "", isOnline: false, id: 3 },
];

const App = () => {
  return (
    <>
      <Layout
        contsctsBlock={<ContactBlock data={contacts} />}
        chatBlock={<ChatBlock />}
      />
    </>
  );
};

export default App;
