import { ReactNode } from "react";
import styles from "./StyledButton.module.scss";

interface IStyledButton {
  transparent: boolean;
  children?: ReactNode;
  isWhite?: boolean;
  onClick?: () => void;
}

export const StyledButton = ({
  transparent,
  children,
  isWhite,
  onClick,
}: IStyledButton) => {
  return (
    <a
      onClick={onClick}
      className={
        (transparent ? styles.styledButton : styles.button) +
        " " +
        (isWhite ? styles.white : "")
      }
    >
      {children}
    </a>
  );
};
