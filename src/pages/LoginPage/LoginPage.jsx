import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = (formData) => {
    dispatch(login(formData));
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
