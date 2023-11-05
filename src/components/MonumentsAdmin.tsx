"use client";

import { FiLogOut } from "react-icons/fi";
import { useLogoutMutation } from "@/redux/auth/authAPI";

const MonumentsAdmin = () => {
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout({});
    } catch (error) {
      console.error("Помилка під час виходу:", error);
    }
  };
  return (
    <section>
      MonumentsAdmin
      <FiLogOut onClick={handleLogout} />
    </section>
  );
};
export default MonumentsAdmin;
