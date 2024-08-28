import { useState } from "react";
import styles from "./Select.module.scss";
import arrowDown from "/src/assets/arrowDown.svg";

interface ISelect {
  label: string;
  defaultValue: string;
  options: string[];
}

export const Select = ({ label, defaultValue, options }: ISelect) => {
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const [open, setOpen] = useState(false);

  const handleOption = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    setSelectedOption((e.target as HTMLElement).innerText);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen((toggle) => !toggle);
  };

  return (
    <div className={styles.selectMenu}>
      <span className={styles.label}>{label}:</span>
      <div onClick={handleOpen} className={styles.selectBtn}>
        <span className={styles.sBtnText}>{selectedOption}</span>
        <img src={arrowDown} alt="arrow down" />
      </div>
      {open ? (
        <ul onClick={(e) => handleOption(e)} className={styles.options}>
          {options.map((text) => (
            <li value={text} className={styles.option}>
              <span className={styles.optionText}>{text}</span>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
