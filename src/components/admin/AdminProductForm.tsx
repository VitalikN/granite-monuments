import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "@/sass/layouts/login.module.scss";
import { addSchema, updateSchema } from "@/types/validationSchemas";
import { ToastContainer } from "react-toastify";
import { ErrorFeedbackProps, AdminProductFormProps } from "@/types/types";

import useFormLogic from "../hooks";

const AdminProductForm: React.FC<AdminProductFormProps> = ({
  onClose,
  action,
  data,
}) => {
  const {
    initialValues,
    handleOnChange,
    handleSubmit,
    openFileInput,
    selectedFileName,
  } = useFormLogic(onClose, action, data);

  const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ name }) => {
    return (
      <ErrorMessage name={name}>
        {(errorMessage) => <span className={styles.error}>{errorMessage}</span>}
      </ErrorMessage>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={action === "add" ? addSchema : updateSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>
            {action === "add" ? "Додати пам'ятник" : "Оновити дані пам'ятника"}
          </h2>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            closeOnClick
            theme="light"
          />
          <div className={styles.form__box}>
            <label className={styles.label}>
              Опис:
              <Field
                className={styles.input}
                type="text"
                name="title"
                error={touched.title && errors.title}
              />
            </label>
            <ErrorFeedback name="title" />
          </div>
          <div className={styles.form__box}>
            <label className={styles.label}>
              Тип:
              <Field
                className={styles.input}
                component="select"
                name="subtitle"
                error={touched.subtitle && errors.subtitle}
              >
                <option value="" disabled></option>
                <option value="open">Відкритий</option>
                <option value="closed">Закритий</option>
              </Field>
            </label>
            <ErrorFeedback name="subtitle" />
          </div>
          <div className={styles.form__box}>
            <label className={styles.label}>
              Катигорія:
              <Field
                component="select"
                className={styles.input}
                name="category"
                error={touched.category && errors.category}
              >
                <option value="" disabled></option>
                <option value="single">одинарний</option>
                <option value="double">подвійний</option>
                <option value="accessories">Аксесуари</option>
                <option value="icons">Ікони</option>
              </Field>
            </label>
            <ErrorFeedback name="category" />
          </div>
          <div className={styles.form__box}>
            <label className={styles.label}>
              Ціна:
              <Field
                className={styles.input}
                type="number"
                name="price"
                error={touched.price && errors.price}
              />
            </label>
            <ErrorFeedback name="price" />
          </div>
          <div className={styles.form__box}>
            <label className={styles.label}>
              Зображення:
              <div
                className={`${styles.input} ${styles.input__img}`}
                onClick={openFileInput}
              >
                {selectedFileName}
              </div>
              <Field
                style={{
                  display: "none",
                }}
                type="file"
                accept="image/*"
                name="url"
                onChange={handleOnChange}
              />
            </label>
          </div>
          <button className={styles.styledBtn} type="submit">
            {action === "add" ? "Додати" : "Редагувати"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdminProductForm;
