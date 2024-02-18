import { ErrorFeedbackProps } from "@/types/types";
import { ErrorMessage } from "formik";

import styles from "@/sass/layouts/login.module.scss";

const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errorMessage) => <span className={styles.error}>{errorMessage}</span>}
    </ErrorMessage>
  );
};
export default ErrorFeedback;
