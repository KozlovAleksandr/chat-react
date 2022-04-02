import "./contactsBlockListItem.css";

const ContactBlockListItem = ({ name, avatar, isOnline }) => {
  let status = "";

  if (isOnline) {
    status += "Online";
  } else {
    status += "Offline";
  }

  return (
    <div className="contactsBlockListItem">
      <div>
        <h5>{name}</h5>
        <h6>{status}</h6>
      </div>
    </div>
  );
};

export default ContactBlockListItem;