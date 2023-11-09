"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";

import styles from "@/sass/layouts/login.module.scss";
import { useLoginForm } from "../hooks";
import { ErrorFeedbackProps } from "@/types/types";
import { validationSchema } from "@/types/validationSchemas";

const Login: React.FC = () => {
  const { handleLogin, isLoading, isError, error } = useLoginForm();

  const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ name }) => {
    return (
      <ErrorMessage name={name}>
        {(errorMessage) => <span className={styles.error}>{errorMessage}</span>}
      </ErrorMessage>
    );
  };

  return (
    <section className={styles.section__login}>
      <div className={`${styles.container} ${styles.login__container__form}`}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            handleLogin(values);
            resetForm();
          }}
          validationSchema={validationSchema}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.form__box}>
                <label className={styles.label}>
                  email:
                  <Field
                    className={styles.input}
                    type="email"
                    name="email"
                    error={touched.email && errors.email}
                  />
                </label>
                <ErrorFeedback name="email" />
              </div>
              <div className={styles.form__box}>
                <label className={styles.label}>
                  Password:
                  <Field
                    className={styles.input}
                    type="password"
                    name="password"
                    error={touched.password && errors.password}
                  />
                </label>

                <ErrorFeedback name="password" />
              </div>

              <button className={styles.styledBtn} type="submit">
                Sign in
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
export default Login;
