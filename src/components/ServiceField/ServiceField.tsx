import styles from "./ServiceField.module.scss";

export const ServiceField = () => {
  return (
    <>
      <span className={styles.title}>УСЛУГА:</span>
      <div className={styles.service}>
        <div>
          <h1>Замена light сенсора на телефоне</h1>
          <h2>Apple, смартфон</h2>
        </div>
      </div>
    </>
  );
};
