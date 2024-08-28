import { useSmall } from "hooks/useSmall";
import styles from "./StatisticSection.module.scss";
import { useRef } from "react";

export const StatisticSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSmall] = useSmall(sectionRef, 500);

  return (
    <section ref={sectionRef} className={styles.statisticSection}>
      <h1 className={styles.title}>{isSmall ? "Статистика" : ""}</h1>
      <div className={`container ${styles.container}`}>
        <div className={styles.text}>
          <p>
            В своём стремлении улучшить пользовательский опыт мы упускаем, что
            базовые сценарии поведения пользователей формируют глобальную
            экономическую сеть и при этом - ограничены исключительно образом
            мышления. Дальнейшее развитие различных форм деятельности позволяет
            оценить значение благоприятных перспектив. Прежде всего, новая
            модель организационной деятельности играет определяющее значение для
            соответствующих условий активизации.
          </p>
          <p>
            Имеется спорная точка зрения, гласящая примерно следующее:
            непосредственные участники технического прогресса неоднозначны и
            будут объявлены нарушающими общечеловеческие нормы этики и морали.
            Банальные, но неопровержимые выводы, а также непосредственные
            участники технического прогресса и по сей день остаются уделом
            либералов, которые жаждут быть заблокированы в рамках своих
            собственных рациональных ограничений.
          </p>
        </div>
        <div className={styles.circleWrapper}>
          <div className={styles.circle}>
            <span className={`gradientText ${styles.greenGlow}`}>1500</span>
          </div>
          <h1>смартфонов HUAWEI отремонтировано</h1>
        </div>
      </div>
    </section>
  );
};
