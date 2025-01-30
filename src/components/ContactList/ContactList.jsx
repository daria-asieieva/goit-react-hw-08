import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOperations";
import { selectFilteredContacts } from "../../redux/contacts/contactsSelectors";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p>{name}: {number}</p>
          <button onClick={() => dispatch(deleteContact(id))} className={styles.button}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
