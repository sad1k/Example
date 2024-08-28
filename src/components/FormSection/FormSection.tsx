import { IOpenModal } from "pages/MainPage/MainPage";
import styles from "./FormSection.module.scss";
import { Form } from "components/Form/Form";
import { CommentField } from "components/CommentField/CommentField";

export const FormSection = ({ openModal }: IOpenModal) => {
  return (
    <section className={styles.formSection}>
      <div className={`container ${styles.container}`}>
        <h1>Заберем ваш сломанный смартфон прямо из дома</h1>
        <h2>
          Оставьте Ваш номер телефона и мы перезвоним Вам{" "}
          <strong>прямо сейчас</strong>.
        </h2>
        <Form openModal={openModal} />
      </div>
    </section>
  );
};
