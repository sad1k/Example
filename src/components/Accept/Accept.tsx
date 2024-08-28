import styles from "./Accept.module.scss";
import colorClose from "/src/assets/colorClose.svg";
import checkCircle from "/src/assets/checkСircle.svg";

interface IAccept {
  open: boolean;
  handleClose: () => void;
}

export const Accept = ({ open, handleClose }: IAccept) => {
  return (
    <div className={open ? styles.position : styles.empty}>
      <div className={styles.accept}>
        <button onClick={handleClose} className={styles.close}>
          <img src={colorClose} />
        </button>
        <h1>Спасибо за заявку!</h1>
        <img className={styles.circle} src={checkCircle} />
        <h2>Наш менеджер свяжется с Вами</h2>
      </div>
    </div>
  );
};
