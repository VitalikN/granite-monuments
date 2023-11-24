import { useState, useEffect, RefObject, useRef } from "react";
import { useSelector } from "react-redux";

import { useCurrentQuery, useLoginMutation } from "@/redux/auth/authAPI";
import authSelector from "@/redux/auth/authSelector";
import {
  useAddMonumentMutation,
  useUpdateMonumentMutation,
} from "@/redux/adminMonumentsApi/adminMonumentsApi";

import { AuthResult, FormValues, MyErrorType } from "@/types/types";
import { toast } from "react-toastify";

export const useFormLogic = (
  onSubmit: () => void,
  action: "add" | "update",
  data: any
) => {
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [addMutation] = useAddMonumentMutation();
  const [updateMutation] = useUpdateMonumentMutation();

  const [selectedFileName, setSelectedFileName] = useState("");

  const initialValues = {
    title: data?.title || "",
    subtitle: data?.subtitle || "",
    category: data?.category || "",
    price: data?.price || "",
    favorite: false,
  };

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
      if (action === "add") {
        await addMutation(formData);
        toast.success(`Новий товар додано`);
      } else if (action === "update") {
        await updateMutation({ formData, _id: data._id });
        toast.success(`Товар оновлено`);
      }

      onSubmit();
    } catch (error) {
      console.error(error);
    }
  };

  const openFileInput = () => {
    fileInputRef.current?.click();
  };

  return {
    initialValues,
    handleOnChange,
    handleSubmit,
    openFileInput,
    fileInputRef,
    selectedFileName,
  };
};

export const useLogin = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const handleLogin = async (values: FormValues) => {
    try {
      const response = await login(values);
      if ("data" in response) {
        toast.success("Вхід виконано успішно!");
      } else {
        toast.error("Невірна електронна адреса або пароль. Спробуйте ще раз.");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLoginError = () => {
    toast.error("Невірна електронна адреса або пароль. Спробуйте ще раз.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      await handleLogin(values);

      resetForm();
    } catch (error) {
      handleLoginError();
    }
  };

  return { isLoading, isError, error, handleSubmit };
};

export const useAuth = (): AuthResult => {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  const {
    data: token,
    error,
    isSuccess,
    isLoading,
  } = useCurrentQuery({
    skip: !isLoggedIn,
    refetchOnMount: true,
  });

  return {
    isLoggedIn,
    isLoading,
    isError: !!(
      error &&
      (error as MyErrorType).status === 401 &&
      (error as MyErrorType).data.message === "Not authorized"
    ),
  };
};

export const useDynamicHeight = (initialWidth = 768, initialHeight = 420) => {
  const [dynamicHeight, setDynamicHeight] = useState(initialHeight);

  useEffect(() => {
    const handleResize = () => {
      const w = Math.min(window.innerWidth, 2560);

      const w1 = initialWidth,
        h1 = initialHeight;
      const w2 = 2560,
        h2 = 1400;

      const calculatedHeight = h1 + ((w - w1) * (h2 - h1)) / (w2 - w1);
      setDynamicHeight(calculatedHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [initialHeight, initialWidth]);

  return dynamicHeight;
};

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  isOpen: boolean,
  onClose: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, ref, onClose]);
};

export const useToggleMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedForm, setSelectedForm] = useState<string | null>(null);

  const openForm = (form: string) => {
    setSelectedForm(form);
    setMenuOpen(true);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }

    return () => {
      document.body.classList.remove("body-no-scroll");
    };
  }, [menuOpen]);

  return {
    menuOpen,
    setMenuOpen,
    selectedForm,
    openForm,
  };
};
