import { useState, useEffect, RefObject } from "react";

import SimpleLightbox from "simplelightbox";

import { AuthResult, FormValues, MyErrorType } from "@/types/types";
import { useCurrentQuery, useLoginMutation } from "@/redux/auth/authAPI";
import { useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";
import { toast } from "react-toastify";

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

export const useDynamicHeight = () => {
  const [dynamicHeight, setDynamicHeight] = useState(420);

  useEffect(() => {
    const handleResize = () => {
      const w = Math.min(window.innerWidth, 2560);

      const w1 = 768,
        h1 = 420;
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
  }, []);

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
