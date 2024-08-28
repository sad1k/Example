import { StyledButton } from "components/Button/StyledButton";
import styles from "./Form.module.scss";
import { IOpenModal } from "pages/MainPage/MainPage";
import { CommentField } from "components/CommentField/CommentField";

export const Form = ({ openModal }: IOpenModal) => {
  const handleClick = () => {
    openModal(<CommentField />);
  };
  return (
    <form className={styles.formPanel}>
      <input placeholder="Имя" className={styles.input} />
      <input placeholder="+7 --- --- -- --" />
      <StyledButton onClick={handleClick} transparent={false}>
        Перезвонить мне{" "}
      </StyledButton>
    </form>
  );
};
