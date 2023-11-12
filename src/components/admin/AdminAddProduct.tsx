import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "@/sass/layouts/login.module.scss";
import { addSchema } from "@/types/validationSchemas";
import { ToastContainer } from "react-toastify";
import { ErrorFeedbackProps, ModalPropsUpdate } from "@/types/types";
import { useAdminAddProduct } from "../hooks";

const AdminAddProduct: React.FC<ModalPropsUpdate> = ({ onClose }) => {
  const {
    errorByImg,
    fileInputRef,
    selectedFileName,
    handleOnChange,
    handleSubmit,
  } = useAdminAddProduct(onClose);

  const initialValues = {
    title: "",
    subtitle: "",
    category: "",
    price: "",
    favorite: false,
  };

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
      validationSchema={addSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Додати пам`ятник</h2>
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
                <option value="" disabled>
                  Оберіть категорію
                </option>
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
                onClick={() => fileInputRef.current?.click()}
              >
                {selectedFileName || <> {/* <AiOutlinePlus size={20} /> */}</>}
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
              <div style={{ display: errorByImg }}>
                <span className={styles.error}>оберіть зображення</span>
              </div>
            </label>
          </div>
          <button className={styles.styledBtn} type="submit">
            Додати
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdminAddProduct;
