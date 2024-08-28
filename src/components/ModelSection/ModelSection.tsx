import { ModelCard } from "components/ModelCard/ModelCard";
import styles from "./ModelSection.module.scss";
import phone from "/src/assets/phone2.png";
import { StyledButton } from "components/Button/StyledButton";
import { useRef } from "react";
import { useSmall } from "hooks/useSmall";
import { IOpenModal } from "pages/MainPage/MainPage";
import { Selection } from "components/Selection/Selection";

let index = 0;

export const ModelSection = ({ openModal }: IOpenModal) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSmall] = useSmall(sectionRef, 600);
  const models = Array.from({ length: isSmall ? 4 : 12 }, () => 0);

  const handleClick = () => {
    openModal(<Selection />);
  };
  return (
    <section ref={sectionRef} className={styles.modelSection}>
      <div className={`container ${styles.container}`}>
        <h1 id="brands">Выберите модель</h1>
        <h4>Выберите свою модель</h4>
        <div onClick={handleClick} className={styles.models}>
          {models.map((_, i) => (
            <ModelCard
              key={index++}
              image={phone}
              text="20 Pro 8/256Gb Phantom Blue"
              isGradient={i === 0 ? true : false}
            />
          ))}
        </div>
        <StyledButton onClick={() => void 0} transparent={false}>
          Показать еще
        </StyledButton>
      </div>
    </section>
  );
};
