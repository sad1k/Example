import arrow from "/src/assets/arrow.png";
import plata from "/src/assets/plata.png";
import styles from "./DetailSection.module.scss";
import tel from "/src/assets/iconPhone.png";
import cracked from "/src/assets/cracked.png";
import { useSmall } from "hooks/useSmall";
import { useRef } from "react";

export const DetailSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSmall] = useSmall(sectionRef, 600);
  return (
    <section ref={sectionRef} className={styles.detailSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.detailSectionCard}>
          <h1>Слишком сильные повреждения?</h1>
          <h4>Сдайте ваше устройство на запчасти обратившись в наш сервис</h4>
          <div className={styles.footer}>
            <p className="gradientText">
              {isSmall ? "Посмотреть" : "Разобрать на запчасти"}
            </p>
            <img className={styles.arrow} src={arrow} alt="стрелка вправо" />
          </div>
          <img className={styles.plata} src={plata} alt="Материнская плата" />
        </div>
        <div className={`${styles.detailSectionCard} ${styles.background}`}>
          <h1>Ознакомится с более точными ценами</h1>
          <div className={styles.footer}>
            <img src={tel} alt="tel icon" />
            <p className={`gradientText ${styles.font}`}>89610988111</p>
          </div>
          <img
            className={styles.cracked}
            src={cracked}
            alt="сломанный телефон"
          />
        </div>
        <div className={`${styles.detailSectionCard} ${styles.fullWidth}`}>
          <h1>Покупайте запчасти онлайн</h1>
          <h4>Комплектующие на различные девайсы прямо со склада</h4>
          <div className={styles.footer}>
            <p className={`gradientText`}>
              {!isSmall ? "Посмотреть" : "Разобрать на запчасти"}
            </p>
            <img className={styles.arrow} src={arrow} alt="стрелка вправо" />
          </div>
        </div>
      </div>
    </section>
  );
};
