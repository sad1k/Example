import { IOpenModal } from "pages/MainPage/MainPage";
import styles from "./ConsultSection.module.scss";
import { Form } from "components/Form/Form";

export const ConsultSection = ({ openModal }: IOpenModal) => {
  return (
    <section className={styles.consultSection}>
      <div className={`container ${styles.container}`}>
        <h1>Нужна консультация?</h1>
        <h2>
          Оставьте Ваш номер телефона и запишем вас на бесплатную консультацию.
        </h2>
        <Form openModal={openModal} />
      </div>
    </section>
  );
};
