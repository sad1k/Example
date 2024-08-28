import styles from "./FirstBlock.module.scss";
import phone from "assets/huawei.png";
import { StyledButton } from "components/Button/StyledButton";
import { Selection } from "components/Selection/Selection";
import { IOpenModal } from "pages/MainPage/MainPage";

export const FirstBlock = ({ openModal }: IOpenModal) => {
  const handleClick = () => {
    openModal(<Selection />);
  };
  return (
    <>
      <section className={styles.firstBlock}>
        <div className={styles.backgroundGradient}></div>
        <div className={`container ${styles.container}`}>
          {/* <Background /> */}
          <div className={styles.innerContainer}>
            <h1 className={styles.title}>
              Ремонт <span>HUAWEI</span> в Екатеринбурге любой сложности
            </h1>
            <p className={styles.subtitle}>
              Ремонтируем устройства любой сложности в кратчайшие сроки и с
              гарантией до 3 месяцев
            </p>

            <StyledButton onClick={handleClick} transparent={false}>
              Заказать ремонт
            </StyledButton>
          </div>
          <div className={styles.image}>
            <img src={phone} />
          </div>
        </div>
      </section>
    </>
  );
};
