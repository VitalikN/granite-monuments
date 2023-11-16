import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "@/sass/layouts/login.module.scss";
import { updateSchema } from "@/types/validationSchemas";
import { ToastContainer, toast } from "react-toastify";
import { ErrorFeedbackProps, ModalPropsUpdate } from "@/types/types";
import { useUpdateMonumentMutation } from "@/redux/adminMonumentsApi/adminMonumentsApi";
import { useEffect, useRef, useState } from "react";

const AdminUpdateProduct: React.FC<ModalPropsUpdate> = ({
  onClose,

  data,
}) => {
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [update] = useUpdateMonumentMutation();

  const [initialValues, setInitialValues] = useState({
    title: data.title,
    subtitle: data.subtitle,
    category: data.category,
    price: data.price,
    favorite: false,
  });

  useEffect(() => {
    setInitialValues((prevValues) => ({
      ...prevValues,
      title: data.title,
      subtitle: data.subtitle,
      category: data.category,
      price: data.price,
      favorite: false,
    }));
  }, [data]);

  // const initialValues = {
  //   title: data.title,
  //   subtitle: data.subtitle,
  //   category: data.category,
  //   price: data.price,
  //   favorite: false,
  // };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImg(e.target.files[0]);
      setSelectedFileName(e.target.files[0]?.name || "");
    }
  };

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("subtitle", values.subtitle);
    formData.append("category", values.category);
    formData.append("price", values.price);
    if (selectedImg !== null) {
      formData.append("url", selectedImg);
    }

    try {
      console.log(...formData);

      await update({ formData, _id: data._id });
      toast.success(`Товар оновлено`);
      //   onClose();
    } catch (error) {
      return toast.error("error");
    }
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
      validationSchema={updateSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Оновити дані пам`ятника</h2>

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
            Редагувати
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AdminUpdateProduct;
