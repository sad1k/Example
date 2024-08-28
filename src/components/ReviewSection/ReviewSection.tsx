import { ReviewSectionCard } from "components/ReviewSectionCard/ReviewSectionCard";
import styles from "./ReviewSection.module.scss";
import arrow from "/src/assets/smallArrow.png";
import { useSmall } from "hooks/useSmall";
import { useRef } from "react";
import { Navigator } from "components/Navigator/Navigator";

export const ReviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSmall] = useSmall(sectionRef, 680);

  return (
    <section ref={sectionRef} className={styles.reviewSection}>
      <div className={`container ${styles.container}`}>
        <h1 id="review">Отзывы</h1>
        <div className={styles.reviews}>
          {!isSmall ? (
            <button className={styles.btn + " " + styles.rotate}>
              <img src={arrow} alt="стрелка" />
            </button>
          ) : (
            ""
          )}

          <ReviewSectionCard
            name={"Владимир"}
            text={
              "Чинят не только мобильную технику, что очень порадовало! Перепаяли порт на midi-контроллере, все качественно и быстро! Очень выручили :)"
            }
          />
          <ReviewSectionCard
            name={"Константин"}
            text={
              "Сломалось гнездо зарядки у планшета. В других мастерских просили несколько тысяч за полную замену детали, а местный мастер смог перепаять и теперь все работает."
            }
          />
          <ReviewSectionCard
            name={"Артём"}
            text={
              "Узнал что почти все сервисы покупают тут запчасти для ремонта и решил обратиться напрямую за запчастью и ремонтом. Вышло ДЕШЕВО!!"
            }
          />
          {!isSmall ? (
            <button className={styles.btn}>
              <img src={arrow} alt="стрелка" />
            </button>
          ) : (
            ""
          )}
        </div>
        <div className={styles.navigation}>
          {isSmall ? <Navigator first="01" second="03" left={true} /> : ""}
        </div>
      </div>
    </section>
  );
};
