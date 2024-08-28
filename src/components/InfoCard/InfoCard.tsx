import styles from "./InfoCard.module.scss";

interface IInfoCardProps {
  image: string;
  alt: string;
  text: string;
  number: number;
  isGradient?: boolean;
}

export const InfoCard = ({
  image,
  alt,
  text,
  number,
  isGradient,
}: IInfoCardProps) => {
  return (
    <div className={styles.infoCard}>
      <div className={styles.image}>
        <img src={image} alt={alt} />
      </div>
      <div className={styles.title}>
        <p className={styles.empty + " " + (isGradient ? "gradientText" : "")}>
          {text}
        </p>
      </div>
      <div className={styles.number}>
        <span
          className={styles.empty + " " + (isGradient ? "gradientText" : "")}
        >
          0{number}
        </span>
      </div>
    </div>
  );
};
