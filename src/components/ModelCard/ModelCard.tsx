import styles from "./ModelCard.module.scss";

interface IModelCard {
  image: string;
  text: string;
  isGradient?: boolean;
}

export const ModelCard = ({ image, text, isGradient }: IModelCard) => {
  return (
    <div className={styles.modelCard}>
      <div className={styles.title}>
        <p className={isGradient ? "gradientText" : ""}>{text}</p>
      </div>
      <div className={styles.image}>
        <img src={image} />
      </div>
    </div>
  );
};
