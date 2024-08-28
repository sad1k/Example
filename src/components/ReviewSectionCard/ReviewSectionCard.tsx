import styles from "./ReviewCard.module.scss";
import icon from "/src/assets/user.png";

interface IReviewSectionCard {
  text: string;
  name: string;
}

export const ReviewSectionCard = ({ text, name }: IReviewSectionCard) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.user}>
        <div className={styles.avatar}>
          <img src={icon} alt="user icon" />
        </div>
        <span>{name}</span>
      </div>
      <p className={styles.review}>{text}</p>
    </div>
  );
};
