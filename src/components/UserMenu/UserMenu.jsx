import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import { selectUser } from "../../redux/auth/authSelectors";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.menu}>
      <p className={styles.user}>Welcome, {user.name}</p>
      <button className={styles.button} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
