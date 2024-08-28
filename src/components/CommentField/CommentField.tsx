import styles from "./CommentField.module.scss";

export const CommentField = () => {
  return (
    <div className={styles.padding}>
      <label className={styles.label}>
        КОММЕНТАРИЙ (НЕОБЯЗАТЕЛЬНО):
        <input placeholder="Введите ваши пожелания" />
      </label>
    </div>
  );
};
