"use client";

import { Field, Form, Formik } from "formik";

import { useDynamicHeight, useLogin } from "../hooks";
import { validationSchema } from "@/types/validationSchemas";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorFeedback from "./ErrorFeedback";
import styles from "@/sass/layouts/login.module.scss";

const Login: React.FC = () => {
  const { isLoading, isError, handleSubmit } = useLogin();
  const dynamicHeight = useDynamicHeight(320, 320);

  return (
    <section
      className={styles.section__login}
      style={{ height: `${dynamicHeight}px` }}
    >
      <div className={`${styles.container} ${styles.login__container__form}`}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
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
                {isLoading ? "Loading...." : "Вхід"}
              </button>
            </Form>
          )}
        </Formik>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          closeOnClick
          theme="light"
        />
      </div>
    </section>
  );
};
export default Login;
