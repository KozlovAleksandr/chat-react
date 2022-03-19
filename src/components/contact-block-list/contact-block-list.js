import ContactBlockListItem from "../contact-block-list-item/contact-block-list-item";

import "./contact-block-list.css";

const ContactBlockList = ({ data }) => {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <ContactBlockListItem key={id} {...itemProps} />;
  });

  return <div className="contact-block-list">{elements}</div>;
};

export default ContactBlockList;
