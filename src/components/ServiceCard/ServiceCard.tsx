import styles from "./ServiceCard.module.scss";

interface IServiceCard {
  text: string;
  days: string;
  price: string;
  isGradient?: boolean;
}

export const ServiceCard = ({
  text,
  days,
  price,
  isGradient,
}: IServiceCard) => {
  console.log(styles.gradientBorder);
  console.log(isGradient);
  return (
    <div
      className={`${styles.servicesCard} ${
        isGradient ? styles.gradientBorder : ""
      }`}
    >
      <div className={styles.title}>
        <p className={isGradient ? "gradientText" : ""}>{text}</p>
      </div>
      <div className={styles.info}>
        <span className={isGradient ? "gradientText" : ""}>{days}</span>
        <span className={isGradient ? "gradientText" : ""}>{price}</span>
      </div>
    </div>
  );
};
