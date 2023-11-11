"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";

import styles from "@/sass/layouts/login.module.scss";
import { useLogin } from "../hooks";
import { ErrorFeedbackProps } from "@/types/types";
import { validationSchema } from "@/types/validationSchemas";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const { isLoading, isError, handleSubmit } = useLogin();

  const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ name }) => {
    return (
      <ErrorMessage name={name}>
        {(errorMessage) => <span className={styles.error}>{errorMessage}</span>}
      </ErrorMessage>
    );
  };

  // const handleLoginError = () => {
  //   toast.error("Invalid email or password. Please try again.", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };
  // const handleSubmit = async (values, { resetForm }) => {
  //   const success = await handleLogin(values);
  //   resetForm();
  //   if (!success) {
  //     handleLoginError();
  //   }
  // };

  return (
    <section className={styles.section__login}>
      <div className={`${styles.container} ${styles.login__container__form}`}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          // onSubmit={async (values, { resetForm }) => {
          //   const success = await handleLogin(values);
          //   resetForm();
          //   if (!success) {
          //     handleLoginError();
          //   }
          // }}
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
                {isLoading ? "Loading...." : "Sign in"}
              </button>
              {isError && (
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  closeOnClick
                  theme="light"
                />
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
export default Login;
