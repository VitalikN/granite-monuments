import Link from "next/link";

const AdminSidebar = () => {
  return (
    <Link
      href="/admin/monuments-admin"
      //   className={`${styles.navigation__link} ${
      //     pathname === "/" ? styles.active : ""
      //   }`}
    >
      monuments-admin
    </Link>
  );
};
export default AdminSidebar;
