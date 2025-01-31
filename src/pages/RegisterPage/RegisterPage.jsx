import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegister = (formData) => {
    dispatch(register(formData));
  };

  return (
    <div className={styles.container}>
      <h2>Register</h2>
      <RegistrationForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterPage;
