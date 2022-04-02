import ContactBlockSearch from "./contactsBlockSearch/contactsBlockSearch";
import ContactBlockList from "./contactsBlockList/contactBlockList";

export function ContactBlock({ data }) {
  return (
    <>
      <ContactBlockSearch />
      <ContactBlockList data={data} />
    </>
  );
}
