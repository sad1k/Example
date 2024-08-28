import { StyledButton } from "components/Button/StyledButton";
import styles from "./Modal.module.scss";
import close from "/src/assets/close.svg";
import { FormEvent } from "react";

interface IModal {
  OtherField: JSX.Element;
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const Modal = ({ OtherField, onClose, open, onSubmit }: IModal) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <div className={open ? styles.background : styles.empty} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <button onClick={onClose} className={styles.close}>
            <img src={close} />
          </button>
          Заполните форму и с вами свяжутся в ближайшее время
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.padding}>
            <div className={styles.gradient}>
              <label htmlFor="name">Ваше имя:</label>
              <input type="text" id="name" placeholder="Александр" />
            </div>
          </div>
          <div className={styles.padding}>
            <div className={styles.telephone}>
              <label htmlFor="tel">Ваше телефон:</label>
              <input type="tel" id="tel" placeholder="+7 (000) 000-00-00" />
            </div>
          </div>
          <div>{OtherField}</div>
          <div className={styles.padding}>
            <div className={styles.politics}>
              <label htmlFor="politics">
                <div>
                  Я соглашаюсь на обработку персональных данных и c{" "}
                  <a>политикой конфиденциальности</a>
                </div>
                <input
                  className={styles.checkbox}
                  id="politics"
                  type="checkbox"
                />
                <span className={styles.checkStyle}></span>
              </label>
            </div>
          </div>
          <div onClick={handleSubmit} className={styles.submit}>
            <StyledButton transparent={false}>Отправить</StyledButton>
          </div>
        </form>
      </div>
    </div>
  );
};
