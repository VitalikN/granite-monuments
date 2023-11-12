import { useState, useEffect, RefObject, useRef } from "react";

import SimpleLightbox from "simplelightbox";

import { AuthResult, FormValues, MyErrorType } from "@/types/types";
import { useCurrentQuery, useLoginMutation } from "@/redux/auth/authAPI";
import { useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";
import { toast } from "react-toastify";

import { useAddMonumentMutation } from "@/redux/adminMonumentsApi/adminMonumentsApi";

export const useAdminAddProduct = () => {
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const [errorByImg, setErrorByImg] = useState("none");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [add] = useAddMonumentMutation();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImg(e.target.files[0]);
      setSelectedFileName(e.target.files[0]?.name || "");
      setErrorByImg("none");
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
    if (!selectedImg) {
      setErrorByImg("block");
      return;
    }

    try {
      await add(formData);
      console.log(values);
      toast.success(`Новий товар додано`);
    } catch (error) {
      return toast.error("error");
    }
  };

  const openFileInput = () => {
    fileInputRef.current?.click();
  };

  return {
    selectedImg,
    errorByImg,
    fileInputRef,
    selectedFileName,
    handleOnChange,
    handleSubmit,
    openFileInput,
  };
};

export const useLogin = () => {
  const [login, { isLoading, isError, error }] = useLoginMutation();

  const handleLogin = async (values: FormValues) => {
    try {
      await login(values);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLoginError = () => {
    toast.error("Invalid email or password. Please try again.", {
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
    await handleLogin(values);
    resetForm();
    handleLoginError();
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

  return { menuOpen, setMenuOpen };
};

export const useSimpleLightbox = (images: any[]) => {
  useEffect(() => {
    const lightbox = new SimpleLightbox(".single__list a", {
      captionDelay: 250,
      disableRightClick: true,
      showCounter: false,
      scrollZoom: false,
    });

    lightbox.on("shown.simplelightbox", () => {
      document.body.classList.add("body-lock");
    });

    lightbox.on("close.simplelightbox", () => {
      document.body.classList.remove("body-lock");
    });
    return () => {
      lightbox.destroy();
    };
  }, [images]);
};
