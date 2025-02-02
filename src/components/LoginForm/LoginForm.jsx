import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field } from "formik";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => dispatch(login(values))}
    >
      <Form className={styles.form}>
        <label>Email</label>
        <Field type="email" name="email" required className={styles.input} />
        
        <label>Password</label>
        <Field type="password" name="password" required className={styles.input} />
        
        <button type="submit" className={styles.button}>Login</button>
      </Form>
    </Formik>
  );
}
