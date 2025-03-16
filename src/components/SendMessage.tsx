"use client";

import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useSendMessageMutation } from "@/redux/sendMessage/sendMessageApi";

import styles from "@/sass/layouts/sendMessage.module.scss";
import ErrorFeedback from "./admin/ErrorFeedback";
import { validationSendMessageSchema } from "@/types/validationSchemas";
import { FormValuesSendMessage } from "@/types/types";

interface SendMessageFormProps {
  onClose: () => void; // Define the type of the onClose function
}
const SendMessageForm = ({ onClose }: SendMessageFormProps) => {
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const initialValues: FormValuesSendMessage = {
    name: "",
    tel: "",
  };

  const handleSubmit = async (
    values: FormValuesSendMessage,
    { resetForm }: FormikHelpers<FormValuesSendMessage>
  ) => {
    try {
      await sendMessage(values).unwrap();
      toast.success("Повідомлення успішно відправлено!");
      resetForm();
      onClose();
    } catch (error) {
      toast.error("Помилка при відправленні повідомлення");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSendMessageSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Зв`яжіться з нами</h2>
          <div className={styles.form__box}>
            <label className={styles.label}>
              Ім`я
              <Field
                autoComplete="off"
                type="text"
                name="name"
                placeholder="Введіть ваше ім'я"
                className={styles.input}
                error={touched.name && errors.name}
              />
            </label>
            <ErrorFeedback name="name" />
          </div>
          <div className={styles.form__box}>
            <label className={styles.label}>
              Телефон
              <Field
                autoComplete="off"
                type="tel"
                name="tel"
                placeholder="+380..."
                className={styles.input}
                error={touched.tel && errors.tel}
              />
            </label>
            <ErrorFeedback name="tel" />
          </div>
          <button className={styles.styledBtn} type="submit">
            {isLoading ? "Відправка..." : "Відправити"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SendMessageForm;
