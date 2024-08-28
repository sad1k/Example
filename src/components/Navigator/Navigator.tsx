import whiteArrow from "/src/assets/whiteArrow.png";
import styles from "./Navigator.module.scss";
import colorArrow from "/src/assets/colorArrow.png";

interface INavigator {
  first: string;
  second: string;
  left?: boolean;
  right?: boolean;
}

export const Navigator = ({ first, second, left, right }: INavigator) => {
  return (
    <div className={styles.navigator}>
      <img className={styles.first} src={left ? colorArrow : whiteArrow} />
      <span>{`${first}/${second}`}</span>
      <img className={styles.second} src={right ? colorArrow : whiteArrow} />
    </div>
  );
};
