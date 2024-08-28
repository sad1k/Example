import { InfoCard } from "components/InfoCard/InfoCard";
import styles from "./InfoSection.module.scss";
import frame1 from "/src/assets/Frame.png";
import frame2 from "/src/assets/Frame2.png";
import frame3 from "/src/assets/Frame3.png";
import frame4 from "/src/assets/Frame4.png";
import phone from "/src/assets/phone.png";
import { Navigator } from "components/Navigator/Navigator";

export const InfoSection = () => {
  const texts = [
    "Уточняем проблему и проводим диагностику",
    "Согласовываем цену и сроки ремонта",
    "Осуществляем ремонт",
    "Отдаем устройство с ноыми деталями",
  ];

  return (
    <section className={styles.infoSection}>
      <img className={styles.phone} src={phone} alt="Телефон" />
      <div className={`container ${styles.container}`}>
        <h1>Как мы работаем?</h1>
        <div className={styles.cards}>
          <InfoCard
            image={frame1}
            number={1}
            alt={texts[0]}
            text={texts[0]}
            isGradient
          />
          <InfoCard image={frame2} number={2} alt={texts[1]} text={texts[1]} />
          <InfoCard image={frame3} number={3} alt={texts[2]} text={texts[2]} />
          <InfoCard image={frame4} number={4} alt={texts[3]} text={texts[3]} />
        </div>
        <Navigator first={"01"} second={"04"} left={true} />
      </div>
    </section>
  );
};
