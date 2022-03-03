import ContactBlockSearch from '../contact-block-search/contact-block-search';
import ContactBlockList from '../contact-block-list/contact-block-list';

import './contact-block.css';

const ContactBlock = () => {
  return (
    <div className="contact-block">
      <ContactBlockSearch/>
      <ContactBlockList/>
    </div>
  )
}

export default ContactBlock;
