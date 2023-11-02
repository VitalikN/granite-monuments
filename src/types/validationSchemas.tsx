import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().required("Обов'язкове поле!"),
  password: Yup.string()
    .min(6, "Пароль повинен мати щонайменше 6 символів!")
    .required("Обов'язкове поле!"),
});
