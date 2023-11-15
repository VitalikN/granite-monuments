import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
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
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      closeOnClick
      theme="light"
    />
  );
};
export default Toast;
