import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().required("Обов'язкове поле!"),
  password: Yup.string()
    .min(6, "Пароль повинен мати щонайменше 6 символів!")
    .required("Обов'язкове поле!"),
});

export const validationSchemaUpdate = Yup.object().shape({
  email: Yup.string(),
  password: Yup.string()
    .min(6, "Пароль повинен мати щонайменше 6 символів!")
    .required("Обов'язкове поле!"),
});

export const addSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  subtitle: Yup.string()
    .oneOf(["open", "closed"], "Invalid subtitle value")
    .required("Subtitle is required"),
  category: Yup.string()
    .oneOf(
      ["single", "double", "accessories", "icons"],
      "Invalid category value"
    )
    .required("Category is required"),
  price: Yup.number().required("обов’язкове поле"),
  favorite: Yup.boolean(),
});

export const updateSchema = Yup.object({
  title: Yup.string(),
  subtitle: Yup.string().oneOf(["open", "closed"], "Invalid subtitle value"),
  category: Yup.string().oneOf(
    ["single", "double", "accessories", "icons"],
    "Invalid category value"
  ),
  price: Yup.number(),
  favorite: Yup.boolean(),
});
export const addEpitaphSchema = Yup.object({
  epitaph: Yup.string().required("Epitaph is required"),
  epitaphNumber: Yup.number().required("обов’язкове поле"),
});
export const validationSendMessageSchema = Yup.object({
  name: Yup.string().min(2, "Мінімум 2 символи").required("Ім'я обов'язкове"),
  tel: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Введіть коректний номер телефону")
    .required("Телефон обов'язковий"),
});
