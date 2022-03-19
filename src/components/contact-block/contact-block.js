import ContactBlockSearch from "../contact-block-search/contact-block-search";
import ContactBlockList from "../contact-block-list/contact-block-list";

import "./contact-block.css";

const ContactBlock = ({ data }) => {
  return (
    <div className="contact-block">
      <ContactBlockSearch />
      <ContactBlockList data={data} />
    </div>
  );
};

export default ContactBlock;
