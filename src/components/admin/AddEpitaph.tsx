import { ErrorFeedbackProps } from "@/types/types";
import { Formik, Field, Form, ErrorMessage } from "formik";

import styles from "@/sass/layouts/login.module.scss";
import { ToastContainer } from "react-toastify";
import { useAddEpitaphMutation } from "@/redux/epitaphs/adminEpitaphsApi";
import * as Yup from "yup";

export const addEpitaphSchema = Yup.object({
  epitaph: Yup.string().required("Epitaph is required"),
  epitaphNumber: Yup.number().required("обов’язкове поле"),
});

interface AddEpitaphProps {
  onClose: () => void;
  refetch: () => void;
}
interface EpitaphFormProps {
  epitaph: string;
  epitaphNumber: number;
}

const AddEpitaph: React.FC<AddEpitaphProps> = ({ onClose, refetch }) => {
  const initialValues = {
    epitaph: "",
    epitaphNumber: 0,
  };

  const [add] = useAddEpitaphMutation();

  const handleSubmit = async (
    values: EpitaphFormProps,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await add(values).unwrap();
      resetForm();
      onClose();
      refetch();
    } catch (error) {
      console.log("error");
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
      //   validationSchema={action === "add" ? addSchema : updateSchema}
      validationSchema={addEpitaphSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>
            Додати Епітафій
            {/* {action === "add" ? "Додати пам'ятник" : "Оновити дані пам'ятника"} */}
          </h2>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            closeOnClick
            theme="light"
          />
          <div className={styles.form__box}>
            <label className={styles.label}>
              Номер:
              <Field
                className={styles.input}
                type="number"
                name="epitaphNumber"
                error={touched.epitaphNumber && errors.epitaphNumber}
              />
            </label>
            <ErrorFeedback name="epitaphNumber" />
          </div>
          <div className={styles.form__box__textarea}>
            <label className={styles.label}>
              Епітафій:
              <Field
                className={`${styles.input} ${styles.textarea}`}
                type="text"
                as="textarea"
                name="epitaph"
                error={touched.epitaph && errors.epitaph}
              />
            </label>
            <ErrorFeedback name="epitaph" />
          </div>
          <button className={styles.styledBtn} type="submit">
            Додати епітафій
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default AddEpitaph;
