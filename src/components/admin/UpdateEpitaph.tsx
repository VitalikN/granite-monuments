// import { ErrorFeedbackProps } from "@/types/types";
// import { Formik, Field, Form, ErrorMessage } from "formik";

// import styles from "@/sass/layouts/login.module.scss";
// import { ToastContainer, toast } from "react-toastify";
// import {
//   useAddEpitaphMutation,
//   useUpdateEpitaphMutation,
// } from "@/redux/epitaphs/adminEpitaphsApi";
// import * as Yup from "yup";

// export const updateEpitaphSchema = Yup.object({
//   epitaph: Yup.string(),
//   epitaphNumber: Yup.number(),
// });

// interface AddEpitaphProps {
//   onClose: () => void;
//   refetch: () => void;
//   data: any;
// }
// interface EpitaphFormProps {
//   epitaph: string;
//   epitaphNumber: number;
// }

// const UpdateEpitaph: React.FC<AddEpitaphProps> = ({
//   data,
//   onClose,
//   refetch,
// }) => {
//   const initialValues = {
//     epitaph: data.epitaph,
//     epitaphNumber: data.epitaphNumber,
//   };

//   const [update] = useUpdateEpitaphMutation();

//   const handleSubmit = async (
//     values: EpitaphFormProps,
//     { resetForm }: { resetForm: () => void }
//   ) => {
//     try {
//       await update({ _id: data._id, ...values });

//       toast.success(`Епітафій оновлено`);

//       resetForm();
//       onClose();
//     } catch (error) {
//       console.log("error");
//     }
//   };

//   const ErrorFeedback: React.FC<ErrorFeedbackProps> = ({ name }) => {
//     return (
//       <ErrorMessage name={name}>
//         {(errorMessage) => <span className={styles.error}>{errorMessage}</span>}
//       </ErrorMessage>
//     );
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={updateEpitaphSchema}
//       onSubmit={handleSubmit}
//       enableReinitialize
//     >
//       {({ errors, touched }) => (
//         <Form className={styles.form}>
//           <h2 className={styles.title}>Оновити дані Епітафій</h2>

//           <div className={styles.form__box}>
//             <label className={styles.label}>
//               Номер:
//               <Field
//                 className={styles.input}
//                 type="number"
//                 name="epitaphNumber"
//                 error={touched.epitaphNumber && errors.epitaphNumber}
//               />
//             </label>
//             <ErrorFeedback name="epitaphNumber" />
//           </div>
//           <div className={styles.form__box__textarea}>
//             <label className={styles.label}>
//               Епітафій:
//               <Field
//                 className={`${styles.input} ${styles.textarea}`}
//                 type="text"
//                 as="textarea"
//                 name="epitaph"
//                 error={touched.epitaph && errors.epitaph}
//               />
//             </label>
//             <ErrorFeedback name="epitaph" />
//           </div>
//           <button className={styles.styledBtn} type="submit">
//             Додати епітафій
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };
// export default UpdateEpitaph;
