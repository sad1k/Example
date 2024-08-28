import logo from "assets/truelogo.svg";
import styles from "./Header.module.scss";
import { StyledButton } from "components/Button/StyledButton";
import { useRef, useState } from "react";
import { useSmall } from "hooks/useSmall";
import tel from "/src/assets/telephone.png";
import { CommentField } from "components/CommentField/CommentField";

interface IHeader {
  isFooter?: boolean;
  openModal: (field: JSX.Element) => void;
}

export const Header = ({ isFooter, openModal }: IHeader) => {
  const [open, setOpen] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSmall] = useSmall(sectionRef, 768);

  const handleOpenModal = () => {
    openModal(<CommentField />);
  };

  if (isSmall && isFooter) {
    return (
      <header ref={sectionRef} className={styles.footerHeader}>
        <div className={styles.logo}>
          <img src={logo} alt="Логотип" />
        </div>
        <div>
          <nav>
            <ul className={styles.footerList}>
              <li>
                <a href="#uslugi">Наши услуги</a>
              </li>
              <li>
                <a href="#brands">Бренды</a>
              </li>
              <li>
                <a href="#review">Отзывы</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.down}>
          <span className={styles.lastLink}>
            <img src={tel} alt="Телефон" />
            <a href="tel+8 (343) 311-21-11">+8 (343) 311-21-11</a>
          </span>
          <StyledButton
            onClick={handleOpenModal}
            isWhite={isFooter}
            transparent={true}
          >
            Перезвонить мне
          </StyledButton>
        </div>
      </header>
    );
  }

  return (
    <header ref={sectionRef} className={styles.header}>
      <div className={`container ${styles.container}`}>
        {open ? (
          <button
            onClick={() => setOpen((toggle) => !toggle)}
            className={styles.closeMenuBtn}
          ></button>
        ) : (
          <button
            onClick={() => setOpen((toggle) => !toggle)}
            className={styles.menuBtn}
          ></button>
        )}

        <img src={logo} alt="Логотип" />
        <nav>
          <ul
            onClick={() => {
              if (isSmall) {
                setOpen((toggle) => !toggle);
              }
            }}
            className={open ? styles.list + " " + styles.active : styles.list}
          >
            <li>
              <a href="#uslugi">Наши услуги</a>
            </li>
            <li>
              <a href="#brands">Бренды</a>
            </li>
            <li>
              <a href="#review">Отзывы</a>
            </li>
            <li className={styles.lastLink}>
              <a href="tel+8 (343) 311-21-11">+8 (343) 311-21-11</a>
            </li>
          </ul>
        </nav>
        <StyledButton
          onClick={handleOpenModal}
          isWhite={isFooter}
          transparent={true}
        >
          Перезвонить мне
        </StyledButton>
        <a href="tel+8 (343) 311-21-11" className={styles.tel}></a>
      </div>
    </header>
  );
};
