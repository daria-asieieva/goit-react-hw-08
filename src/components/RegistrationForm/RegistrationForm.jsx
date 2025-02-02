import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => dispatch(register(values))}
    >
      <Form className={styles.form}>
        <label>Name</label>
        <Field type="text" name="name" required className={styles.input} />
        
        <label>Email</label>
        <Field type="email" name="email" required className={styles.input} />
        
        <label>Password</label>
        <Field type="password" name="password" required className={styles.input} />
        
        <button type="submit" className={styles.button}>Register</button>
      </Form>
    </Formik>
  );
}
