import { Select } from "components/Select/Select";
import styles from "./Selection.module.scss";

export const Selection = () => {
  return (
    <div>
      <Select
        defaultValue="Смартфон"
        label="Техника"
        options={["Смартфон", "Телевизор"]}
      />
      <div className={styles.subSelect}>
        <Select
          defaultValue="Apple"
          label="Бренд"
          options={["Apple", "Honor"]}
        />
        <Select
          defaultValue="iPhone 11"
          label="Модель"
          options={["iPhone 11", "iPhone 9"]}
        />
      </div>
    </div>
  );
};
