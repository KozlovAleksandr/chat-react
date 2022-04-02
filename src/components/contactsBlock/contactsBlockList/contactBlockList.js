import ContactBlockListItem from "../contactsBlockListItem/contactsBlockListItem";

import "./contactBlockList.css";

const ContactBlockList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <ContactBlockListItem key={id} {...itemProps} />;
  });

  return <div className="contactBlockList">{elements}</div>;
};

export default ContactBlockList;
