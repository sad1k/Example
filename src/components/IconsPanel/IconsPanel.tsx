import { Icon } from "components/Icon/Icon";
import styles from "./IconsPanel.module.scss";
import logo1 from "/src/assets/birka.png";
import logo2 from "/src/assets/settings.png";

export const IconsPanel = () => {
  return (
    <div className={styles.panel}>
      <div className={`container ${styles.container}`}>
        <div className={`gradientText ${styles.firstIcon}`}>
          <div className={styles.icon}>
            <Icon />
          </div>
          Ремонт и консультация на месте
        </div>
        <div>
          <div className={styles.icon + " " + styles.iconSecond}></div>
          <img src={logo1} />
          Нет скрытых платежей и переплат
        </div>
        <div>
          <div className={styles.icon + " " + styles.iconThird}></div>
          <img src={logo2} />
          Собственный склад запчастей
        </div>
      </div>
    </div>
  );
};
