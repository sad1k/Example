import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={`container ${styles.container}`}>
        <p>Copyright 2020. Все права защищены</p>
        <p>Дизайн, разработка, реклама by Axmobi 8961-098-81-11</p>
      </div>
    </footer>
  );
};
