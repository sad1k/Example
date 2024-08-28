import { ServiceCard } from "components/ServiceCard/ServiceCard";
import styles from "./ServicesSection.module.scss";
import phone from "/src/assets/phone3.png";
import { IOpenModal } from "pages/MainPage/MainPage";
import { ServiceField } from "components/ServiceField/ServiceField";

export const ServicesSection = ({ openModal }: IOpenModal) => {
  const services = Array.from({ length: 10 }, () => 0);

  const handleClick = () => {
    openModal(<ServiceField />);
  };

  return (
    <section className={styles.servicesSection}>
      <div className={`container ${styles.container}`}>
        <h1 id="uslugi">Наши услуги</h1>
        <h4>
          Мы сможем отремонтировать любой вид техники, вот наиболее часто
          заказываемые у нас услуги
        </h4>
        <div className={styles.wrapper}>
          <div onClick={handleClick} className={styles.services}>
            {services.map((_, i) => (
              <ServiceCard
                days="1-3 дня"
                price="1 000 - 3 000 ₽"
                text="Замена light сенсора на телефоне"
                isGradient={i === 0 ? true : false}
              />
            ))}
          </div>
        </div>
      </div>
      <img className={styles.phone} src={phone} alt="Телефон" />
    </section>
  );
};
