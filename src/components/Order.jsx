import { BsImages } from "react-icons/bs";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LiaClipboardListSolid } from "react-icons/lia";
import { CgSearchLoading } from "react-icons/cg";
import { GiTakeMyMoney } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

import styles from "../sass/layouts/order.module.scss";

const Order = () => {
  return (
    <section className={styles.order__section}>
      <div className={styles.container}>
        <h2 className={styles.order__title}>Етапи замовлення</h2>
        <ul className={styles.order__list}>
          <li className={styles.order__item}>
            <BsImages className={styles.order__icon} />
            <p className={styles.order__text}>1. Ознайомтеся з продукцією</p>
          </li>
          <li className={styles.order__item}>
            <IoMdCheckboxOutline className={styles.order__icon} />
            <p className={styles.order__text}>2. Оберіть потрібний товар</p>
          </li>
          <li className={styles.order__item}>
            <LiaClipboardListSolid className={styles.order__icon} />
            <p className={styles.order__text}>3. Ми оформляємо замовлення</p>
          </li>
          <li className={styles.order__item}>
            <CgSearchLoading className={styles.order__icon} />
            <p className={styles.order__text}>4. Узгодження деталей</p>
          </li>
          <li className={styles.order__item}>
            <GiTakeMyMoney className={styles.order__icon} />
            <p className={styles.order__text}>
              5. Ви вносите предоплату будь-яким зручним для Вас способом
            </p>
          </li>
          <li className={styles.order__item}>
            <TbTruckDelivery className={styles.order__icon} />
            <p className={styles.order__text}>6. Доставка та встановлення</p>
          </li>
          <li className={styles.order__item}>
            <GiTakeMyMoney className={styles.order__icon} />

            <p className={styles.order__text}>7. Розрахунок</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Order;
