import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contactsOperations";
import { selectContacts, selectLoading } from "../../redux/contacts/contactsSelectors";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import Filter from "../../components/Filter/Filter";
import styles from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h2>Your Contacts</h2>
      <ContactForm />
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {contacts.length > 0 ? <ContactList /> : <p>No contacts found.</p>}
    </div>
  );
};

export default ContactsPage;
