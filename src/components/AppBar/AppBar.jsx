import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/contacts" className={styles.link}>
              Contacts
            </NavLink>
            <div className={styles.userMenu}>
              <span className={styles.username}>Welcome, {user.name}</span>
              <button
                className={styles.logoutButton}
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <NavLink to="/register" className={styles.link}>
              Register
            </NavLink>
            <NavLink to="/login" className={styles.link}>
              Login
            </NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default AppBar;
