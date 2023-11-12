import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  ErrorFeedbackProps,
  FormValues,
  ModalPropsUpdate,
} from "@/types/types";

import styles from "@/sass/layouts/login.module.scss";

import { validationSchemaUpdate } from "@/types/validationSchemas";
import { useUpdateMutation } from "@/redux/auth/authAPI";
import authSelector from "@/redux/auth/authSelector";
import { useSelector } from "react-redux";

const UpdateForm: React.FC<ModalPropsUpdate> = ({ onClose }) => {
  const email = useSelector(authSelector.getAdminEmail);
  const initialValues = {
    email,
    password: "",
  };

  const [update] = useUpdateMutation();
  const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ name }) => {
    return (
      <ErrorMessage name={name}>
        {(errorMessage) => <span className={styles.error}>{errorMessage}</span>}
      </ErrorMessage>
    );
  };

  const handleSubmit = async (values: FormValues) => {
    try {
      console.log(values);
      await update(values);
      onClose();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaUpdate}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={`${styles.form} `}>
          <h2 className={styles.title}>Редагувати профіль</h2>

          <div className={styles.form__box}>
            <label className={styles.label}>
              Нова електронна пошта:
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
              Новий пароль:
              <Field
                className={styles.input}
                type="password"
                name="password"
                error={touched.password && errors.password}
              />
            </label>
            <ErrorFeedback name="password" />
          </div>

          <button
            className={styles.styledBtn}
            type="submit"
            disabled={isSubmitting}
          >
            Оновити
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateForm;
