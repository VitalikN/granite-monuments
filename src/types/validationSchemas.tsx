import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Логін повинен мати щонайменше 4 символи!")
    .required("Обов'язкове поле!"),
  password: Yup.string()
    .min(6, "Пароль повинен мати щонайменше 6 символів!")
    .required("Обов'язкове поле!"),
});
