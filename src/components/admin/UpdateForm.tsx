import React from "react";
import { useUpdateMutation } from "@/redux/auth/authAPI";
import authSelector from "@/redux/auth/authSelector";
import { useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { FormValues, ModalPropsUpdate } from "@/types/types";

import { validationSchemaUpdate } from "@/types/validationSchemas";
import { toast } from "react-toastify";
import ErrorFeedback from "./ErrorFeedback";
import styles from "@/sass/layouts/login.module.scss";

const UpdateForm: React.FC<ModalPropsUpdate> = ({ onClose }) => {
  const email = useSelector(authSelector.getAdminEmail);
  const initialValuesEmail = {
    email,
    password: "",
  };

  const [update] = useUpdateMutation();

  const handleSubmit = async (values: FormValues) => {
    try {
      await update(values);
      toast.success(`Дані оновлено`);
      onClose();
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValuesEmail}
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
