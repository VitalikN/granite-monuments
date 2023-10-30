import styles from "../sass/layouts/about.module.scss";

const AboutUs = () => {
  return (
    <section className={styles.about__section}>
      <div className={`${styles.container} ${styles.about__overlay}`}>
        <p className={`${styles.about__text} ${styles.about__lead}`}>
          Наша компанія спеціалізується на виготовленні пам’ятників та
          надгробків для мешканців м. Мукачево та всієї Закарпатської області. З
          2006 року ми постійно вдосконалюємо свої послуги, інвестуючи в новітні
          технології та ідеї.
        </p>
        <p className={styles.about__text}>
          Використовуючи виключно високоякісну сировину, яка доставляється прямо
          з місць видобутку, ми гарантуємо тривалий термін служби наших виробів.
          Наш асортимент сировини включає: габро, лабрадорит, покостівське
          граніт, маславський граніт, лезниківський граніт, капустянський
          граніт, та токівський граніт.
        </p>
      </div>
      <div className={`${styles.container} ${styles.about__overlay__title}`}>
        <h2 className={styles.about__title}>Послуги, які ми пропонуємо:</h2>
        <ul className={styles.about__list}>
          <li className={styles.about__item}>
            <p className={styles.about__text}>Художнє оформлення пам’ятника.</p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__text}>Заливка армованого фундаменту.</p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__text}>
              Доставка і монтаж пам’ятників в м. Мукачево та Закарпатській
              області.
            </p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__text}>
              Укладання плитки навколо пам`ятника за бажанням замовника.
            </p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__text}>
              Виготовлення та встановлення аксесуарів: вази, книжки, гранітні
              лавки, підсвічники, гранітні та латунні хрести.
            </p>
          </li>
        </ul>
      </div>
      <div className={`${styles.container} ${styles.about__overlay}`}>
        <h2 className={styles.about__title}>Чому обирати нас:</h2>
        <ul className={styles.about__list}>
          <li className={styles.about__item}>
            <p className={styles.about__text}>
              1. <span className={styles.about__chip}> Якість: </span>наша
              репутація підтверджена часом і численними відгуками задоволених
              клієнтів.
            </p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__text}>
              2.
              <span className={styles.about__chip}>
                Розуміння побажань клієнта:
              </span>
              ми завжди стремимося до ідеального втілення ваших ідей.
            </p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__text}>
              3.<span className={styles.about__chip}> Своєчасність: </span>після
              оформлення замовлення ви завжди отримаєте чітке орієнтування за
              термінами його виконання.
            </p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__text}>
              4. <span className={styles.about__chip}>Доступність: </span>
              завдяки прямим поставкам сировини ми можемо пропонувати
              демократичні ціни на наші товари і послуги.
            </p>
          </li>
          <li className={styles.about__item}>
            <p className={styles.about__text}>
              5. <span className={styles.about__chip}>Комплексний підхід:</span>
              від виготовлення до доставки та монтажу.
            </p>
          </li>
        </ul>
        <p className={styles.about__text} invite>
          Запрошуємо вас ознайомитися з нашими виробами в онлайн-каталозі. Ми
          гарантуємо креативний підхід, високу якість виробів та відповідальне
          виконання вашого замовлення. Чекаємо на вас!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
